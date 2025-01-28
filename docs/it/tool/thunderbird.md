# Thunderbird

## Sync Thunderbird Message Filter OneDrive

### 1- Move the existing msgFilterRules.dat file to OneDrive:

```cmd
move "C:\Users\{username}\AppData\Roaming\Thunderbird\Profiles\{profile_name}.default-release\ImapMail\imap.gmail.com\msgFilterRules.dat" "C:\Users\{username}\OneDrive\Thunderbird\msgFilterRules.dat"
```
Ensure the destination directory (C:\Users\{username}\OneDrive\Thunderbird) exists. If not, create it first.

### 2- Create the symbolic link:
```cmd
mklink "C:\Users\{username}\AppData\Roaming\Thunderbird\Profiles\{profile_name}.default-release\ImapMail\imap.gmail.com\msgFilterRules.dat" "C:\Users\{username}\OneDrive\Thunderbird\msgFilterRules.dat"
```

### 3- Ensure OneDrive Directory Exists:
Create the directory in OneDrive if it doesn't exist:
```cmd
mkdir "C:\Users\{username}\OneDrive\Thunderbird"
```

### 4 - Move Existing File:
Move the existing msgFilterRules.dat file to OneDrive:
```cmd
move "C:\Users\{username}\AppData\Roaming\Thunderbird\Profiles\{profile_name}.default-release\ImapMail\imap.gmail.com\msgFilterRules.dat" "C:\Users\{username}\OneDrive\Thunderbird\msgFilterRules.dat"
```

### 5 - Create Symbolic Link:
Create the symbolic link pointing to the new location:
```cmd
mklink "C:\Users\{username}\AppData\Roaming\Thunderbird\Profiles\{profile_name}.default-release\ImapMail\imap.gmail.com\msgFilterRules.dat" "C:\Users\{username}\OneDrive\Thunderbird\msgFilterRules.dat"
```

## On Each Device

### 1- Delete Existing File (if present):

```cmd
del "C:\Users\{username}\AppData\Roaming\Thunderbird\Profiles\{profile_name}.default-release\ImapMail\imap.gmail.com\msgFilterRules.dat"
```

### 2- Create Symbolic Link:

```cmd
mklink "C:\Users\{username}\AppData\Roaming\Thunderbird\Profiles\{profile_name}.default-release\ImapMail\imap.gmail.com\msgFilterRules.dat" "C:\Users\{username}\OneDrive\Thunderbird\msgFilterRules.dat"
```
