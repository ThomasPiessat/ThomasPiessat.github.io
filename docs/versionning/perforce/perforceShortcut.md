## Sync your files :
```sh
p4 sync
```
## Sync your files to the older version :
```sh
p4 sync @n
```
## Sync files to the latest revision on the repository :
```sh
p4 sync @n+1
```
## Set P4 Ignore :
```sh
p4 set p4ignore=_filename.ext_
```
## Open all the files for edit :
```sh
p4 edit
```
## Accept the changes that you have made :
```sh
p4 resolve -ay
```
## Submit the changes :
::: warning
Be sure to not have this character " ' " into a changelist description
:::
```sh
p4 submit
```
