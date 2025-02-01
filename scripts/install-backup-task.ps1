$Action = New-ScheduledTaskAction `
    -Execute "PowerShell.exe" `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$PSScriptRoot\backup.ps1`""

$Trigger = New-ScheduledTaskTrigger `
    -Daily `
    -At "23:00"

$Settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Hours 1) `
    -RestartCount 3 `
    -RestartInterval (New-TimeSpan -Minutes 5)

$Task = Register-ScheduledTask `
    -TaskName "ContAfricaX-Backup" `
    -Description "Backup quotidien de la base de données ContAfricaX" `
    -Action $Action `
    -Trigger $Trigger `
    -Settings $Settings `
    -RunLevel Highest `
    -Force

Write-Host "Tâche de backup installée avec succès"
