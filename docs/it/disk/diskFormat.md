---
prev:
  text: 'Disk'
  link: './disk'
---
# Disk Format

Open CMD then type

```sh
diskpart
```
A window should open

### List all the disk
```sh
list disk
```
<img src="/img/IT/USBFormat/listDisk.png" alt="List Disk"> 

### Select the disk you want to clean
```sh
selec disk
```
<img src="/img/IT/USBFormat/selectDisk.png" alt="Select Disk"> 

### Clean the disk
```sh
clean
```

### Create partition 
```sh
create partition primary
```

### Format the disk (choose the format for your use)
```sh
format fs=fat32 quick
```
<img src="/img/IT/USBFormat/formatDisk.png" alt="Format Disk"> 

### Finally active the partition
```sh
active
```
<img src="/img/IT/USBFormat/activePartition.png" alt="Active Partition"> 

Your disk is ready to use