$BackupDir = ".\backups"
$LogDir = ".\logs"
$Timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$BackupFile = "$BackupDir\contafricax_$Timestamp.sql"
$LogFile = "$LogDir\backup_$Timestamp.log"

# Création des dossiers nécessaires
@($BackupDir, $LogDir) | ForEach-Object {
    if (!(Test-Path $_)) {
        New-Item -ItemType Directory -Path $_
    }
}

# Fonction de logging
function Write-Log {
    param($Message)
    $LogMessage = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'): $Message"
    Write-Output $LogMessage
    Add-Content -Path $LogFile -Value $LogMessage
}

try {
    Write-Log "Démarrage du backup"
    
    # Vérifier que Docker est en cours d'exécution
    if (!(Get-Process "Docker Desktop" -ErrorAction SilentlyContinue)) {
        throw "Docker Desktop n'est pas en cours d'exécution"
    }

    # Exécuter le backup
    Write-Log "Exécution du backup de la base de données"
    docker-compose exec -T db pg_dump -U admin contafricax > $BackupFile
    
    if (!(Test-Path $BackupFile)) {
        throw "Le fichier de backup n'a pas été créé"
    }

    # Compression
    Write-Log "Compression du backup"
    Compress-Archive -Path $BackupFile -DestinationPath "$BackupFile.zip" -Force
    Remove-Item $BackupFile

    # Nettoyage des anciens backups
    Write-Log "Nettoyage des anciens backups"
    Get-ChildItem "$BackupDir\*.zip" | 
        Sort-Object CreationTime -Descending | 
        Select-Object -Skip 7 | 
        Remove-Item

    Write-Log "Backup terminé avec succès"
}
catch {
    Write-Log "ERREUR: $_"
    exit 1
}
