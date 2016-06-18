# open-github-diffs

This module will open multiple tabs of the most recent commits diffs on any project on Github. :sunglasses:

## Installation
```sh
  > npm install -g open-github-diffs
```

> Don't forget the "-g" to install it globally. (then you can run the `df` command anywhere)

## Usage

On your terminal:
```sh
  > git fetch (or git pull)
  > df `n. of tabs` `owner/repoName`
```
# Demo
![](http://g.recordit.co/D8ITkomdnq.gif)

#### Api

No api to mess with. Enter the command `dif` <n. of tabs> <`owner`/`repoName`> the github-name and number of tabs (most recent to oldest) and get instant results.

> If you are on Chrome the newest to oldest commits will go from left tor right.

There is no limit to the number of tabs you could try to open. The recommended range is [1...30] but feel free to go for as many as your computer and browser can handle :sunglasses:.

> Please keep your browser open before running the command.

### Raison D'etre

I learn a lot by cloning repos but sometimes I just want to know what are the most recent changes on them by going through Github commit diffs "Don't we just love them :blush:". This package does that (hopefully super well). You get an idea of what is going on a project instantly. Don't waste anymore time clicking around manually on commit histories and let's keep on learning from each other.

## License
MIT © [Mohamed Hayibor](http://github.com/mohamedhayibor)
