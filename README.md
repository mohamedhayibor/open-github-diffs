# open-github-diffs ![](https://img.shields.io/badge/status-stable-green.svg)

This command line module will open multiple tabs of the most recent commits diffs of any project on Github. :sunglasses:

# Demo
![](http://g.recordit.co/D8ITkomdnq.gif)

## Installation
```sh
  > npm install -g open-github-diffs
```

> Don't forget the "-g" to install it globally. (then you can run the `diffs` command anywhere)

## Usage

On your terminal:

```sh
  > diffs 7
  > diffs                      (opens 10 diffs by default)
```

> Bonus: if you want to start out from a particular commit, just check that one out.

Example:
```
  // navigate to where you cloned the repo
  > diffs 7

  // checkout any shas and open tabs from there
  > git checkout 2203ee50656
  > diffs
```


#### Restrictions

You have to be in the repo's directory (cd..)

> Please keep your browser open before running the command.

### Raison D'etre

Don't waste anymore time clicking around manually on commit histories on Github.

## License
MIT © [Mohamed Hayibor](http://github.com/mohamedhayibor)
