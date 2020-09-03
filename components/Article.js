// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Making the best of repetitive tasks',
    date: 'July 21st, 2020',
    firstParagraph: `Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! You guys aren't Santa! You're not even robots. How dare you lie in front of Jesus? I guess if you want children beaten, you have to do it yourself.`,

    secondParagraph: `A true inspiration for the children. Soon enough. What's with you kids? Every other day it's food, food, food. Alright, I'll get you some stupid food. No argument here. I meant 'physically'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence, or service you sexually?`,

    thirdParagraph: `Oh, all right, I am. But if anything happens to me, tell them I died robbing some old man. My fellow Earthicans, as I have explained in my book 'Earth in the Balance'', and the much more popular ''Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.`
  },
  {
    title: 'My name is Jaime',
    date: 'The long summer',
    firstParagraph: `More pigeon pie, please. The Dothraki do things in their own time, for their own reasons. The rains of castamere. The battle of the redgrass field. Pay the iron price. Pay the iron price. Words are like wind. The War of the 5 kings. King in the North. The bear and the maiden fair. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. The wolf and the lion. What is dead may never die. The battle of the redgrass field. The Knight of Lemonwood. I pledge my life and honor to the Night's Watch, for this night and all the nights to come. A good act does not wash out the bad, nor a bad act the good. Each should have its own reward. Forgive my manners. I don't see many ladies these days. Lucky for the ladies. `,

    secondParagraph: `Skoros morghot vestri? Avy jorraelan. Tubi daor. Sikudi nopazmi! Tubi daor. Sikudi nopazmi! Skoros morghot vestri? Bantis zobrie issa se ossyngnoti ledys. Hen syndrorro, onos. Hen nuqir, perzys. Hen morghot, glaeson. Toli rhuqo lotinti, kostilus. Sikudi nopazmi! Zyhys onoso jehikagon Aeksiot epi, se gis hen syndrorro jemagon. Avy jorraelan. Sikudi nopazmi! Daoruni gimi, Ionos Sonaro. Tubi daor. Ao ynoma diniluks? Skoros morghot vestri? `,

    thirdParagraph: `Shekh ma shieraki anni. Hash yer dothrae chek asshekh? Ezas eshna gech ahilee! Hash anha atihak yera save? Yer zheanae sekke. Yer zheanae sekke. Es havazhaan. Hash anha atihak yera save? Ki fin yeni? Athdavrazar! Ezas eshna gech ahilee! Khal ahhas arakh. Hash yer dothrae chek asshekh? Nevakhi vekha ha maan: Rekke, m'aresakea norethi fitte. Hash yer dothrae chek asshekh? Es havazhaan. San athchomari yeraan. Khal ahhas arakh.`
  },
  {
    title: 'What, So Everyone’s Supposed To Sleep Every Single Night Now?',
    date: 'Jan 1st, 2019',
    firstParagraph: `Dont look at me! That guy over there roped me into this. I dunno, some people would pay top dollar for that kind of breakthrough. Aids! Like nothing shady ever happened in a fully furnished office? You ever hear about Wall Street Morty? You know what those guys do in their fancy board rooms? They take their balls and dip 'em in cocaine and wipe 'em all over each other. You know Grandpa goes around and he does his business in public because grandpa isn't shady.`,

    secondParagraph: `Right, Crocubot. So, you're half cold unfeeling reptile, half also cold equally unfeeling machine? I wish that shotgun was my penis. Well, to be honest, I'm kind of grossed out with the sexual nature of how everything unfolded. I didn't know how sexual dragons were. I kind of just wanted to do some D&D stuff, y'know? Jesus Christ! Did the boomy-booms blow up all your wordy-word books?`,

    thirdParagraph: `Let’s be post-apocalyptic scavengerrrrsss! Man, that guy is the Red Grin Grumbold of pretending he knows what's going on. Oh you agree huh? You like that Red Grin Grumbold reference? Well guess what, I made him up. You really are your father's children. Think for yourselves, don't be sheep. I'd like to order one large sofa chair with extra chair please. high chair, no no no recliner... and wheelchair on half. Those guys are inside you building a piece of shit Ethan! They're inside you building a monument to compromise! Fuck them, fuck those people, fuck this whole thing Ethan.`
  }
];

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="openButton">+</span>
  </div>
*/
const articleContainer = document.querySelector('.articles')

function articleMaker( {title, date, firstParagraph, secondParagraph, thirdParagraph} ) {

  const article = document.createElement('div')
  const articleTitle = document.createElement('h2')
  const articleDate = document.createElement('p')
  const paragraphOne = document.createElement('p')
  const paragraphTwo = document.createElement('p')
  const paragraphThree = document.createElement('p')
  const openButton = document.createElement('span')
  const closeButton = document.createElement('span')
  const readButton = document.createElement('button')

  article.appendChild(articleTitle)
  article.appendChild(articleDate)
  article.appendChild(readButton)
  article.appendChild(paragraphOne)
  article.appendChild(paragraphTwo)
  article.appendChild(paragraphThree)
  article.appendChild(openButton)
  article.appendChild(closeButton)

  article.classList.add('article')
  articleDate.classList.add('date')
  openButton.classList.add('expandButton')
  closeButton.classList.add('expandButton', 'inactive')

  articleTitle.textContent = title
  articleDate.textContent = date
  readButton.textContent = 'Mark as READ'
  paragraphOne.textContent = firstParagraph
  paragraphTwo.textContent = secondParagraph
  paragraphThree.textContent = thirdParagraph
  openButton.textContent = `Click to open`
  closeButton.textContent = 'Click to close'

/*
  Step 2: Still inside `articleMaker`, add an event listener to the span.openButton.
  This listener should toggle the class 'article-open' on div.article.
*/
  const clickHandler = () => {
    article.classList.toggle('article-open')
    openButton.classList.toggle('inactive')
    closeButton.classList.toggle('inactive')
  }
  openButton.addEventListener('click', clickHandler)
  closeButton.addEventListener('click', clickHandler)

  readButton.addEventListener('click', () => {
    article.classList.add('read')
  })

/*
  Step 3: Don't forget to return something from your function!
*/

  return article
}

/*
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).
*/

data.forEach(articleObject => {
  const article = articleMaker(articleObject)
  articleContainer.appendChild(article)
})


/*
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/
