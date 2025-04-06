---
prev:
  text: 'Disk'
  link: './disk'
---
# Disk Info Fixes

## Current Pending Sector Count Caution

### 1. What Does Current Pending Sector Count Warning Mean?
Current Pending Sector Count warning is pretty serious as it could be a sign that a hard drive failure is imminent. Pending sectors are basically precursors to the sectors that have been already relocated which is an indication that the drive could become dead at any moment.

### 2. First Thing You Should Do: Back Up All of Your Data
As mentioned above, Current Pending Sector Count is a critical hard drive parameter and shouldn’t be ignored. Backing up your data is a good practice even if there are lower number of pending sectors. Backing up all of your data becomes crucial when your hard drive starts to indicate an increase in pending sectors

### 3. How to Fix Current Pending Sector Count Caution?
Run CHKDSK
In the CMD window, input this command: chkdsk /r /f X: (X here is the letter of the drive you wish to scan)
```cmd
chkdsk /r /f X:
```
