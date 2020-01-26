---
title: "Dotfiles For Fun & Profit"
date: "2017-06-13"
description: Effective dotfile management
slug: dots
---

<section>
  <h1>Dotfiles For Fun & Profit</h1>
  <h2 class="respect-case">
    <a href="https://twitter.com/EliGundry">
      <i class="fa fa-twitter"></i>@EliGundry
      </a>
  </h2>
</section>

<section>
  <h1>A Bit About Me</h1>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Me on Vim" style="height: 500px">

  <aside class="notes">
    * I am a web developer.
    * I use Vim + any terminal I can get my hands on as my IDE.
    * Discovered Vi mode in the now defunct E-TextEditor, a Windows TextMate
      clone and eased my way into Vim slowly.
    * I got fired from an intership in 2012 cause I spent too much time
      customizing Vim and not enough time working.
      * I have a really well documented vim config now that I'm talking to you
        about, so it's sorta worth it?
    * Switched to Neovim last year because all the plugins I installed were
      running sync and making stuff super slow.
    * But the most important thing to know about me is...
    *slide change*
  </aside>
</section>

<section>
  <h1>I Have Way Too Many Computers</h1>

  <figure>
    <img src="too-many-computers.jpg" alt="Not actually my apartment.">
    <figcaption>Actual image of my apartment</figcaption>
  </figure>

  <aside class="notes">
    * It's seriously a problem now.
    * I've had to institute a one in one out program
    * Computers:
      * Macbook
      * Thinkpad
      * Windows 10 Desktop
      * Media Center
      * Handheld PocketCHIP
      * A bunch of half setup Digital Ocean droplets
    * If you want to buy any of those off me, talk to me later, I'll hook you up.
    * I think I am paying off karmic debt from becoming a software engineer
      instead of a sysadmin.
    * In any case, I need to be able to share my awesome Vim IDE setup across
      these 90 million machines.
    * The method that I am using is affectionately known as "dotfiles".
  </aside>
</section>

<section>
  <h1>Enter Dotfiles</h1>
  <blockquote>
    Dotfiles are plain text configuration files on Unix-y systems for things
    like our shell, <code>~/.zshrc</code>, our editor in <code>~/.vimrc</code>,
    and many others. They are called "dotfiles" as they typically are named with
    a leading `.` making them hidden files on your system, although this is not
    a strict requirement.

    - Thoughtbot Intro to Dotfiles
  </blockquote>

  <aside class="notes">
    * Boy oh boy do I love dotfiles.
    * I have been managing my own repo since 2011.
    * Whenever I get bored, I play around with it, trying to make it more perfect.
    * Hint: It is never going to be perfect, I am fighting a windmill here.
    * When I discover a new developer that I respect, I always check to see if
      they have a dotfiles repo.
      * It used to be to learn new things and maybe steal from them but these
        days I see it different.
  </aside>
</section>

<section>
  <h1>Dotfiles Are A Window Into A Developer's Mind</h1>
  <figure>
    <img src="bratpack.jpg" alt="The Bratpack?">
    <figcaption>Can You Spot The Emacs User?</figcaption>
  </figure>

  <aside class="notes">
    * I love looking at other people's configs to not just learn, but to get
      a glimpse into them as a person.
    * I like to dream about what the author is like based upon their
      customizations.
    * If you think about it, a programmer's vim config is a deeply personal bond
      between them and the computer. They are probably the only ones that use it
      so you are learning things about them that they haven't told anyone.
      * Enough of me being creepy, let's talk a practical example.

    *Change slide*

    `jj`: We are going to be friends.
    `jk`: Very serious person, doesn't joke around or leave `jk`s in their comments.
    `C-x C-e`: Emacs user that is living a lie.
  </aside>
</section>

<section data-markdown>
  <textarea name="data-template">
  ## Who Here Remaps Escape?
  `imap jj <Esc> " Cool Person` <!-- .element: class="fragment" -->

  `imap jk <Esc> " Serious Person` <!-- .element: class="fragment" -->

  `imap <C-x><C-e> <Esc> " Emacs User` <!-- .element: class="fragment" -->
  </textarea>
</section>

<section>
  <blockquote>
    "But Eli, I like to keep Vim plain so it works across machines exactly the same!"
    <br>
    - Someone In This Very Audience
  </blockquote>
</section>

<section>
  <h1>Vanilla Vim Users</h1>
  <img src="https://media.giphy.com/media/iDAidbPx3lWa4/giphy.gif" alt="Vanilla Vim User opening Vim on a new machine" style="width: 500px;">

  <aside class="notes">
    * Ah the Vanilla Vim argument.
    * I respect this viewpoint and I think it extends to all Unix commands that
      are configurable.
    * There is nothing wrong with this.
    * Tooling is a personal thing.
    * I keep the core of my Vim config pretty basic. I'm not remapping basic
      movements or depending on features that aren't stock. If I make a mistake in
      Vanilla Vim, I'll just undo it, no biggie.
      * I have a friend that remapped `hjkl` -> `wasd`. I do not understand how
        he works, but work he does.
    * If I can install my dotfiles on any machine with one command, this isn't an
      issue.

    # @TODO Flesh this out.
  </aside>
</section>

<section>
  <blockquote>
    "But Eli, Vim is a text editor, don't use it like an IDE!"
    <br>
    - Same Person In The Audience
  </blockquote>

  <aside class="notes">
    * I also respect this viewpoint, but that doesn't work for me.
    * Rob Pike, the creator of Go, uses Vim without syntax highlighting turned on.
      * He jokingly calls it juvenile
      * I jokingly prefer Rust
    * I know that Vim isn't built for this.
    * Point is...
    *slide-change*
  </aside>
</section>

<section>
  <h1>I ❤️ This 💩 Flies & All</h1>
  <blockquote class="twitter-tweet" data-lang="en">
    <p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/vim?src=hash">#vim</a> and code completion. Yep, that’s about right. <a href="https://t.co/2AzC9wowao">pic.twitter.com/2AzC9wowao</a></p>&mdash; looselyrigorous (@looselyrigorous) <a href="https://twitter.com/looselyrigorous/status/872944602973687809">June 8, 2017</a></blockquote>
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

  <aside class="notes">
    * I've had this happen.
    * I know what is causing this.
    * I can't be bothered to fix it when it does happen.
    * I am very happy with my setup.
    * The community made Vim  become an IDE, not the other way around.
    * In any case, I have a dotfiles and a bunch of machines...
    *slide-change*
  </aside>
</section>

<section>
  <h1>Challenge</h1>
  <p>How do I maintain a consistent environment across machines?</p>
  <img class="fragment" src="https://media.giphy.com/media/qZGFdIJ9F3usE/giphy.gif" alt="Challenge Accepted" style="width: 600px;">
</section>

<section>
  <h1>The Answer Is Always GitHub</h1>
  <figure>
    <a href="https://octodex.github.com/front-end-conftocat">
      <img src="https://octodex.github.com/images/front-end-conftocat.png" alt="Sadly Accurate" style="max-height: 500px;" class="no-border">
    </a>
    <figcaption>Front End Conftocat</figcaption>
  </figure>

  <aside class="notes">
    * First off, this Octocat resonates with me.
      * I found this site, Octodex, that lists all the Octocat variations.
    * But, for real, if you store your dotfiles in a public GitHub, your
      preferred environment is but a git clone and some symlinking away.
    * The real challenge then becomes how do you manage those symlinks?
    * I've made a couple of attempts...
  </aside>
</section>

<section>
  <img src="dots-install.gif" alt="dots.sh in action">
  <h2 class="respect-case"><code>dots.sh</code></h2>
  <h3 class="respect-case">
    <a href="https://github.com/eligundry/dots">
      <i class="fa fa-github"></i>/eligundry/dots
    </a>
  </h3>

  <aside class="notes">
    * I started writing this in 2013 while I was bored doing help desk.
    * It's 100% shell.
    * The only requirement is some sort of vim and git.
    * The script is relatively simple: it just symlinks files.
    * Features:
      * It's implicit. If I want to manage a new file, I just add it to the base
        of the repo and run the install script.
      * It can handle management of "sub-repos", like oh-my-zsh.
        * This used to be done with git modules, which I wouldn't wish on my worst
          enemy.
      * It can also handle platform specific links
        * i.e. I don't need all the links on MacOS that I do on Linux
  </aside>
</section>

<section>
  <h1>Shell Is Awesome!</h1>
  <img src="https://media.giphy.com/media/Jylb9PZHvJZSg/giphy.gif" alt="Yeezus" style="height: 500px;">

  <aside class="notes">
    * Happy Kanye is the best Kanye.
      * Talk to me later about him.
      * GIF is also on point with all those dollar signs.
    * It runs everywhere
    * No setup needed
    * It's fast as hell
    * I still maintain this script and it's my daily driver, but...
    *slide-change*
  </aside>
</section>

<section>
  <h1>Shell Is The Worst!</h1>
  <img src="https://media.giphy.com/media/LLsI04bH2NKOQ/giphy.gif" alt="The Woooooorst" style="height: 500px;">

  <aside class="notes">
    * It's confusing in the way that I need to Google how to do things everytime
      I need to make a change.
      * Does the source come first or the target?
      * I can't tell you how many times I have messed up symlinking a directory.
    * Try maintaining a shell script for a long period of time. It's not fun.
    * It's brittle and unforgiving.
    * This script doesn't address keeping my shells in sync.
      * Update a config on my Thinkpad on Saturday, have to recreate it on
        Monday on my Macbook.
  </aside>
</section>

<section>
  <section>
    <h1 class="respect-case"><code>dotty.py</code></h1>
    <h3 class="respect-case">
      <a href="https://github.com/vibhavp/dotty">
        <i class="fa fa-github"></i>/vibhavp/dotty
      </a>
    </h3>

    <aside class="notes">
      * I discovered this while browsing setups in /r/unixporn
      *slide-down*
      * This place is incredible and will give you Linux envy
      * Before you know it, you are using a tiling window manager and own
        a mechanical keyboard.
      * Check this out.
      *slide-down*
      *watch-video*
      *slide-up*
      * `dotty.py` uses a JSON mapping to symlink files.
      * Super explicit
      * Very simple
      * Can install packages... in Arch
    </aside>
  </section>

  <section>
    <h1 class="respect-case">
      <a href="https://www.reddit.com/r/unixporn/">
        <i class="fa fa-reddit"></i>/r/unixporn
      </a>
    </h1>
  </section>

  <section data-background-video="https://fat.gfycat.com/FrayedEverlastingAplomadofalcon.webm"></section>
</section>

<section>
  <h1 class="respect-case"><code>dotty.py</code> Syntax</h1>
  <pre>
    <code>
{
  "install": [
    "vim",
    "neovim"
  ],
  "link": {
    "bashrc": "~/.bashrc",
    "vimrc": "~/.vimrc"
  },
  "copy": {
    "gitconfig": "~/.gitconfig"
  }
}
    </code>
  </pre>
</section>

<section>
  <img src="https://media.giphy.com/media/3oKIPEh5Lk3RGSIFEI/giphy.gif" alt="MOOOORRRE!" style="width: 800px;">
  <h1>…But I Needed More!</h1>
  <h3 class="respect-case">
    <a href="https://github.com/eligundry/dotty/tree/modularize-dotty">
      <i class="fa fa-github"></i>/eligundry/dotty
    </a>
  </h3>

  <aside class="notes">
    * I forked the repo and started overhauling it as a part of Hacktoberfest 2016.
    * I noticed that it didn't have tests and wasn't installable using `pip`
    * I wanted to learn more about testing and wanted to learn about Python packaging.
    * I also wanted to give dotty some concepts that `dots.sh`
    * I wanted to have it be able to install packages in the OSs I used
    * The original code was somewhat ugly
    * I also wanted to be able to use it in a more modular system
    * Good News: I did all of these things!
  </aside>
</section>

<section>
  <img src="https://media.giphy.com/media/v0eHX3n28wvoQ/giphy.gif" alt="Larry David Confused" style="width: 800px;">
  <h1>…It Wasn't Enough</h1>

  <aside class="notes">
    * Bad News: I'm still not happy.
    * In my code refactoring, I introduced a lot of breaking changes from the
      previous version.
      * The biggest of which is that the run order went from fixed order to the
        order specified in the file.
      * This was to allow dependencies to be specified in order.
    * JSON isn't flexible enough to do what I want.
    * At the end of the day, it wasn't that big of an improvement over my shell
      script.
    * I ended up walking away from this for a few months to work on more
      interesting side projects.
    * One of those side projects was automating my server environments using
      Salt.
    * I had a lot of fun doing this project and a few weeks in, I had a realization.
    *slide-change*
  </aside>
</section>

<section>
  <h1>Development Environments Are Production Environments</h1>

  <aside class="notes">
    * If I cannot produce, I am not profitable
    * I need to treat my local dev the same way I would an expensive web app
    * I am a power user, it needs to cater to me.
  </aside>
</section>

<section>
  <img src="saltstack.png" alt="SaltStack Logo" class="no-border">
  <h3 class="respect-case">
    <a href="https://github.com/eligundry/salt.eligundry.com">
      <i class="fa fa-github"></i>/eligundry/salt.eligundry.com
    </a>
  </h3>

  <aside class="notes">
    * SaltStack is a server orchestration tool, similar to Puppet and Chef
    * What makes Salt so cool is that it can be run without a "master"
    * It's configuration files are all YAML that are rendered with Jinja
    * In Salt, you have two core concepts: pillars and states
  </aside>
</section>

<section>
  <h1>Dots Pillar</h1>
  <pre>
    <code>
dots:
  bashrc: .bashrc
  vimrc: .vimrc
  zshrc: .zshrc
{% if grains['kernel'] == 'Linux' %}
  gtkrc-2.0: .gtkrc-2.0
{% endif %}
    </code>
  </pre>

  <aside class="notes">
    * Pillars are your data. They can be overridden depending on the environment.
    * They are helpful so you can change one value and have it reflected everywhere.
      * No more hard coding!
    * There is a key call `dots`
    * It's children are a dictionary
      * The key is the source file
      * The value is where we want the file to go
    * Salt provides something called `grains`, which provide a powerful way to
      target environments.
      * In this case, we are only linking a specific file if the environment is
        Linux.
  </aside>
</section>

<section>
  <h1>Dots State</h1>
  <pre>
    <code>
{% set user = 'eligundry' %}
{% set dots = '/home/' + user + '/dots' }

dots-repo:
  git.latest:
    - name: https://github.com/eligundry/dots.git
    - target: {{ dots }}
    - user: {{ user }}
    - require:
      - {{ user }}

{% for src, dst in pillar['dots'].items() %}
{{ home }}/{{ dst }}:
  file.symlink:
    - target: {{ dots }}/{{ src }}
    - user: {{ user }}
    - group: {{ user }}
    - makedirs: True
    - force: True
    - require:
      - dots-repo
{% endfor %}
    </code>
  </pre>

  <aside class="notes">
    * Sates are how you make things with your data.
    * In this example, we have:
      * A git repo that is updated on each run
      * A loop that runs over the `dots` key from the previous example and
        symlinks the files
    * In this way, if I want to add a new file, I just update the Pillar and run
      Salt and it just goes.
    * All of this in plain English
  </aside>
</section>

<section>
  <img src="https://media.giphy.com/media/11FRmJRii0I8iA/giphy.gif" alt="But wait..." style="width: 500px;">
  <h1>There's More!</h1>

  <aside class="notes">
    * Using Salt, I can control what packages are on my system
      * For example, I have a shared setup that will setup my Linux desktop
        environments exactly like I'd like.
    * Salt also has this concept of a master.
      * On a master, you can store "secret" files that are pushed out to the
        minions.
      * This is perfect for syncing your ssh/gpg keys across machines.
      * You can also trigger builds from it.
  </aside>
</section>

<section>
  <img src="https://media.giphy.com/media/CoDxgqDOGHUys/giphy.gif" alt="I don't want to feel this way anymore." style="width: 700px;">
  <h1>It's Not Perfect Yet</h1>

  <aside class="notes">
    * While this is a step in the right direction, I'm not finished yet.
    * I need to re-provision all my machines with Salt.
    * I'm thinking about wiring up my Salt runs to crons or something in order
      to auto update.
    * I'm also thinking about wiring up my dots repo to have seperate branches
      for each machine that auto commit/push on highstate. In this way, my
      changes are always up in the cloud. I will be able to pull in changes as
      needed.
  </aside>
</section>

<section>
  <h1>There Is No Right Way</h1>
  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Accidentally hitting capslock in vim <a href="https://t.co/jf6gaB099K">pic.twitter.com/jf6gaB099K</a></p>&mdash; Guillotine Grrrl (@lindseybieda) <a href="https://twitter.com/lindseybieda/status/871784080404348937">June 5, 2017</a></blockquote>
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
  <blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Yo, first person to tell me to remap capslock gets 1000 points deducted from their Hogwarts house</p>&mdash; Guillotine Grrrl (@lindseybieda) <a href="https://twitter.com/lindseybieda/status/871784974466371584">June 5, 2017</a></blockquote>
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

  <aside class="notes">
    * I want to finish with one last thing and it has to do with how we carry
      ourselves as a community.
    * The editor wars are over and they were always lame.
    * The best text editor is the one you use, don't be an ass about it.
  </aside>
</section>

<section>
  <h1>Be About What You Make</h1>
  <h2>Not How You Make It</h2>

  <aside class="notes">
    * As much as I love Vim, I try to never ever force it on someone. If anyone
      asks me if they should pick up Vim, @TODO flesh this out.
    * The purpose of this talk is not for me to brag about Vim or convert anyone
      to it. A text editor is a tool for you to do your job. Be about what you
      make, don't force your world view on someone else.
    * There are hundreds of dotfile management scripts, all of them are the
      best, as they are working for the user. That is all that matters.
  </aside>
</section>

<section>
  <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">This is a response to one of my command line tip tweets.<br><br>Imagine if you received these almost every day for 2 weeks. How would you feel? <a href="https://t.co/CECTL5ixgM">pic.twitter.com/CECTL5ixgM</a></p>&mdash; Safia Abdalla (@captainsafia) <a href="https://twitter.com/captainsafia/status/873533736360583168">June 10, 2017</a></blockquote>
  <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</section>

<section>
  <img src="https://media.giphy.com/media/R2m2NzVxQ3pbG/giphy.gif" alt="Almost there">
  <h1>Takeaways</h1>
  <ul>
    <li class="fragment">Shell Scripts Are Awesome Until You Need To Update Them</li>
    <li class="fragment">Treat Your Local Environment Like Production</li>
    <li class="fragment">Don't Be An Ass</li>
  </ul>
</section>

<section>
  <h1>We Made It!</h1>
  <h2>Thanks for listening, you're the best, any questions?</h2>
  <img src="https://media.giphy.com/media/RDbZGZ3O0UmL6/giphy.gif" alt="We the best!" style="width: 800px;">
</section>