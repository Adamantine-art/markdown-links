# Markdown Links

## Index

* [1. About the Library](#1-About-the-Library)
* [2. Install & Quick Start](#2-Install-&-Quick-Start)
* [3. Some Extra Stats](#3-Some-Extra-Stats)


***

## 1. About the Library

[Markdown](https://en.wikipedia.org/wiki/Markdown) is a lightweight markup language very popular among developers. It is used in many platforms that handle plain text (GitHub, forums, blogs, ...) and it's very common to find several files in that format in any kind of repository (starting with the traditional `README.md`).

These `Markdown` files usually contain _links_ (links) which are often broken or no longer or no longer valid and this greatly impairs the value of the information to be shared.

Within an open source community, we have been proposed to create a tool using [Node.js](https://nodejs.org/), that reads and parses files in the `Markdown` format to verify the links they contain and report some statistics.


## 2. Install & Quick Start

### Install

You can execute the commands on your favorite terminal. After typing the name of the package adamantine-links you put the relative path of your markdown file *including the md extension* as a first parameter to get the basic statistics: href, text and file (url, the clickeable text of that url and the file you're executing).
The outcome will be an array of objects.

*Example*

$ adamantine-links README.md

### Installing the package via npm

```sh
$ npm install adamantine-links -g
```

### Install the package via GitHub

```sh
git clone https://github.com/Adamantine-art/markdown-links.git
```

### Quick Start

After you have installed the package you can just execute `adamantine-links` to see the welcome message where you will be shown the commands you can use.

-image-

You can execute the package following the next structure:

`adamantine-links your-file.md --CLIoptions`

You will see something like this



## 3. Some Extra Stats

You can get more specific stats by using the following commands: 

### --validate or --v

You get the aditional properties of "status" and "ok".

### --stats or --s

You get the number of total and unique links inside the markdown file.

### --validate --stats or --v --s

You can get the total number of links, unique and broken links inside the markdown file.