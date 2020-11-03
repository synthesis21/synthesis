//When u click the modal it appears with the name, insta, site, photo, and video of the object with the corresponding id
//modal
let modalWrap = document.getElementById('modalBg'),
    closeModal = document.getElementById('closeModal'),
    nonModal = document.getElementById('nonModalWrap'),
    name = document.getElementById('name'),
    instaLink = document.getElementById('instaLink'),
    instaLink2 = document.getElementById('instaLink2'),
    siteLink = document.getElementById('siteLink'),
    descrip = document.getElementById('descrip'),
    photo = document.getElementById('modalPic'),
    vimeo = document.getElementById('vimeo'),
    insta2Pipe = document.getElementById('insta2Pipe'),
    insta1Pipe = document.getElementById('insta1Pipe'),
    groupVid = document.getElementById('groupVid'),
    playBtnWrap = document.getElementById('playBtnWrap');

    setTimeout(()=>{
        modalWrap.style.display = 'grid';
    }, 1000);

playBtnWrap.addEventListener('click', ()=>{
    //gif.style.visibility = 'hidden';
    if(groupVid.paused){
        groupVid.play();
        playBtn.innerHTML = "pause";
    }else{
        groupVid.pause();
        playBtn.innerHTML = "play";
    }
})

class person {
    constructor(name, insta, insta2, site, photo, vimeo, descrip) {
        this.name = name;
        this.insta = '@' + insta;
        this.insta2 = '@' + insta2;
        this.instaLink = 'https://www.instagram.com/' + insta;
        this.instaLink2 = 'https://www.instagram.com/' + insta2;
        this.siteLink = "https://" + site;
        this.site = site;
        this.photo = "../images/headshots/normalColor/" + photo;
        this.vimeo = 'https://player.vimeo.com/video/' + vimeo;
        this.descrip = descrip;
    }
}

let abby = new person('Abby Blend', 'abbyblendart', '', 'abbyblend.com','abby1.png', '473391054',
"Hello, I'm Abby! From UX/UI to branding to photography, I am excited by so many areas of design. In my free time, I'm either listening to newly-discovered music on repeat or finding reasons to talk about French&nbsp;culture.");

let dani = new person('Dani Berman', 'daniberman.dzn', '', 'daniberman.com','dani1.png', '473925447',
"Hello! I’m Dani, a passionate creative who enjoys experimenting, researching, and learning! When I’m not designing you can probably find me creating memories or making some coffee to bring back to my Adobe file. I am constantly fascinated by all of the different ways to communicate visually and am grateful to have found my voice in design. I cannot wait to see what the future&nbsp;holds!");

let carly = new person('Carly Blonski', 'carlyblonski.dzn', '', 'carlyblonski.com ','carly1.png', '473391054',
"Hi! I’m Carly Blonski! I’m in more engineering clubs than any non-engineer should ever be in and I’m super involved in THON. I love exploring historic buildings, architecture, theme parks, and looking at all of the details in their designs. When I’m not doing all of that, or serving at the State College classic, The Corner Room, you can catch me dancing and singing along to throwbacks.");

let ron = new person('Ron Feinberg', 're.fein', '', 'refein.com','ron1.png', '473497882',
"Hello adventurers of the internet! Ron is the name and versatility is the game. Offbeat creative and music head who can't seem to stop picking up new hobbies. I would tell you to try and keep up with my antics, except I'm having a hard time&nbsp;myself.");

let amber = new person('Amber Lai', 'amsterbunny.jpg', 'phattywhale', 'amberglai.com','amber1.png', '473544996',
"Hey, I'm Amber! I wear a lot of black and dark colours, but deep down inside, I'm wearing really cute socks, and honestly that sums up my whole aesthetic. Traveling, food, and culture are a few of the things that excite me the most, and sharing it with others is what makes me&nbsp;happiest!");

let michaela = new person('Michaela Lucas', 'm_m_lucas', '', 'michaelalucas.com','michaela1.png', '473535019',
"Michaela hates talking about herself, so she asked her sister to write this. It's okay, people mix us up all the time anyway. When she is not wandering around looking for an interesting shadow to photograph, she can be found reading a good coffee-table book, letting me borrow her <span style='text-decoration: line-through;'>cool</span> clothes, or watching an A24&nbsp;film.");

let cassie = new person('Cassie Luzenski', 'cas.dzn', 'cassieluzenski', 'cassieluzenski.com','cassie1.png', '473278686',
"Hi! I'm Cassie! I'm a graphic designer, photographer, chronic doodler and enthusiast of the color yellow. Outside of design you can find me curled up under a heated blanket watching my favorite tv show – Peaky Blinders – and eating pancakes (yes even for&nbsp;dinner).");

let sarah = new person('Sarah Martin', 'martindesign_', 'marti299', 'sarahmartindesign.com','sarah1.png', '473391054',
"Hello friends, I’m Sarah! If I’m not taking care of these 17 other people like they’re my own children, I’m probably thinking of witty comments to stir the pot a little bit. I’m passionate about supporting real women and breaking unhealthy social norms. My weaknesses include smoothie bowls, fictional stories, cute animals, and interior&nbsp;design.");

let taylor = new person('Taylor Mazzarella', 'tmz.dzn', 'tmazz_', 'taylormazzarella.com','taylor1.png', '473537077',
"Hey what's up! I'm Taylor! When I'm not obsessing over typography you can find me listening to obscure true crime&nbsp;podcasts.");

let tamar = new person('Tamar Najarian', 'bytamar_', '', 'tamarnajarian.com','tamar1.png', '473319684',
"Hey there, I’m Tamar. I’ll start off by saying I am 100% Armenian which is such a big part of my identity and can be seen throughout my designs. Some of my favorite things include cats, listening to music, and spending time with family and friends. Hope you enjoy the Synthesis&nbsp;experience!");

let emp = new person('Emily Parker', 'emilylana_dzn', 'emma.jeanbean', 'abbyblend.com','emp1.png', '473455302',
"Hey, I'm Emily Parker! A driven Creative interested in packaging, branding & print design. When I'm not staring at an InDesign file, you can usually find me outside - hiking, kayaking, planning photoshoots, or searching for the closest coffee&nbsp;shop.");

let jackie = new person('Jackie Siry', 'artxjac', '', 'jackiesiry.com','jac1.png', '473506125',
"Hi, I'm Jackie, a creative trained in design with a strong flair for Visual Arts. I'm not really sure what to say about myself so I'm just going list some things I like. My favorite song is a toss up between Take Off Your Cool by Outkast (Featuring Norah Jones) or A Fond Farewell by Elliott Smith. My favorite word is 'extravaganza'. My favorite color is a light cool blue, much like the background color of my individual video that you should totally check&nbsp;out!");

let sam = new person('Samantha Smith', 'blueyedblony16', '', 'smsmth.com','sam1.png', '474533790',
"Hey there I'm Sam Smith! No, not the British pop idol (although our resemblance is shocking). Outside of class you can find me slinging bagels at my side-hustle, rewatching The Office, and keeping up with the latest&nbsp;memes!");

let zane = new person('Zane Sommese', 'legoknife', '', 'zanesommese.com','zane1.png', '473391054',
"Hey I'm Zane. I hate talking about myself so I'll make this short. I'm passionate about design and really enjoy photography. I love vintage clothes and sometimes I make a hell of a poster or two in my spare time. Also typography is&nbsp;cool.");

let megan = new person('Megan Tam', 'megtamdesign', '', 'megtam.com','megan1.png', '473391054',
"Hi, I'm Megan! I find great satisfaction in discovering the back story or concept that a design piece is based on. Other times, I'm probably looping my newest find on Spotify, planning my next getaway, or embracing that I'm the main character. Currently casting supporting roles&nbsp;only.");

let christie = new person('Christie Warren', '', '', 'christiewarren.github.io','christie1.png', '473929340',
"Hi there! I'm Christie, and around these parts I've earned the title of 'The One Who Likes to Code' and more prestigiously, 'The One Who Loves That Dancing Otter Video.' In my free time I love rock climbing, biking, and -- let's face it -- talking to my pets like they're&nbsp;humans.");

let emw = new person('Emily Watkins', 'emilywatkins5', '', 'emily-watkins.com','emw1.png', '473262706',
"Hi everyone, I'm Emily. My friends call me DJ EWAT. Design is basically my entire life, but when I take a break from the design world, you can find me listening to good music with good&nbsp;people.");

let eileen = new person('Eileen Yu', '', '', 'eileenyudesign.com','eileen1.png', '473391054',
"Hi! I'm Eileen! I love all the spicy food, and will not get bored if I eat Hot-pot 10 days in a row. Outside of design, you can see me with my guitar or camera or taking a walk on a sunny&nbsp;day.");

function openBio(){
    document.querySelectorAll('.bioLink').forEach(item => {
        item.addEventListener('click', event => {
          let id = item.id;
          switch (id) {
            case 'abby':
                photo.src = abby.photo;
                name.innerHTML = abby.name;
                instaLink.innerHTML = abby.insta;
                instaLink.href = abby.instaLink;
                siteLink.innerHTML = abby.site;
                siteLink.href = abby.siteLink;
                descrip.innerHTML = abby.descrip;
                vimeo.src = abby.vimeo;
            break;
            case 'dani':
                photo.src = dani.photo;
                name.innerHTML = dani.name;
                instaLink.innerHTML = dani.insta;
                instaLink.href = dani.instaLink;
                siteLink.innerHTML = dani.site;
                siteLink.href = dani.siteLink;
                descrip.innerHTML = dani.descrip;
                vimeo.src = dani.vimeo;
                break;
            case 'carly':
                photo.src = carly.photo;
                name.innerHTML = carly.name;
                instaLink.innerHTML = carly.insta;
                instaLink.href = carly.instaLink;
                siteLink.innerHTML = carly.site;
                siteLink.href = carly.siteLink;
                descrip.innerHTML = carly.descrip;
                vimeo.src = carly.vimeo;
                break;
            case 'ron':
                photo.src = ron.photo;
                name.innerHTML = ron.name;
                instaLink.innerHTML = ron.insta;
                instaLink.href = ron.instaLink;
                siteLink.innerHTML = ron.site;
                siteLink.href = ron.siteLink;
                descrip.innerHTML = ron.descrip;
                vimeo.src = ron.vimeo;
                break;
            case 'amber':
                photo.src = amber.photo;
                name.innerHTML = amber.name;
                instaLink.innerHTML = amber.insta;
                instaLink.href = amber.instaLink;
                instaLink2.innerHTML = amber.insta2;
                instaLink.href = amber.instaLink2;
                siteLink.innerHTML = amber.site;
                siteLink.href = amber.siteLink;
                descrip.innerHTML = amber.descrip;
                vimeo.src = amber.vimeo;
                break;
            case 'michaela':
                photo.src = michaela.photo;
                name.innerHTML = michaela.name;
                instaLink.innerHTML = michaela.insta;
                instaLink.href = michaela.instaLink;
                siteLink.innerHTML = michaela.site;
                siteLink.href = michaela.siteLink;
                descrip.innerHTML = michaela.descrip;
                vimeo.src = michaela.vimeo;
                break;
            case 'cassie':
                photo.src = cassie.photo;
                name.innerHTML = cassie.name;
                instaLink.innerHTML = cassie.insta;
                instaLink.href = cassie.instaLink;
                instaLink2.innerHTML = cassie.insta2;
                instaLink.href = cassie.instaLink2;
                siteLink.innerHTML = cassie.site;
                siteLink.href = cassie.siteLink;
                descrip.innerHTML = cassie.descrip;
                vimeo.src = cassie.vimeo;
                break;
            case 'sarah':
                photo.src = sarah.photo;
                name.innerHTML = sarah.name;
                instaLink.innerHTML = sarah.insta;
                instaLink.href = sarah.instaLink;
                instaLink2.innerHTML = sarah.insta2;
                instaLink.href = sarah.instaLink2;
                siteLink.innerHTML = sarah.site;
                siteLink.href = sarah.siteLink;
                descrip.innerHTML = sarah.descrip;
                vimeo.src = sarah.vimeo;
                break;
            case 'taylor':
                photo.src = taylor.photo;
                name.innerHTML = taylor.name;
                instaLink.innerHTML = taylor.insta;
                instaLink.href = taylor.instaLink;
                instaLink2.innerHTML = taylor.insta2;
                instaLink.href = taylor.instaLink2;
                siteLink.innerHTML = taylor.site;
                siteLink.href = taylor.siteLink;
                descrip.innerHTML = taylor.descrip;
                vimeo.src = taylor.vimeo;
                break;
            case 'tamar':
                photo.src = tamar.photo;
                name.innerHTML = tamar.name;
                instaLink.innerHTML = tamar.insta;
                instaLink.href = tamar.instaLink;
                siteLink.innerHTML = tamar.site;
                siteLink.href = tamar.siteLink;
                descrip.innerHTML = tamar.descrip;
                vimeo.src = tamar.vimeo;
                break;
            case 'emp':
                photo.src = emp.photo;
                name.innerHTML = emp.name;
                instaLink.innerHTML = emp.insta;
                instaLink.href = emp.instaLink;
                instaLink2.innerHTML = emp.insta2;
                instaLink.href = emp.instaLink2;
                siteLink.innerHTML = emp.site;
                siteLink.href = emp.siteLink;
                descrip.innerHTML = emp.descrip;
                vimeo.src = emp.vimeo;
                break;
            case 'jackie':
                photo.src = jackie.photo;
                name.innerHTML = jackie.name;
                instaLink.innerHTML = jackie.insta;
                instaLink.href = jackie.instaLink;
                siteLink.innerHTML = jackie.site;
                siteLink.href = jackie.siteLink;
                descrip.innerHTML = jackie.descrip;
                vimeo.src = jackie.vimeo;
                break;
            case 'sam':
                photo.src = sam.photo;
                name.innerHTML = sam.name;
                instaLink.innerHTML = sam.insta;
                instaLink.href = sam.instaLink;
                siteLink.innerHTML = sam.site;
                siteLink.href = sam.siteLink;
                descrip.innerHTML = sam.descrip;
                vimeo.src = sam.vimeo;
                break;
            case 'zane':
                photo.src = zane.photo;
                name.innerHTML = zane.name;
                instaLink.innerHTML = zane.insta;
                instaLink.href = zane.instaLink;
                siteLink.innerHTML = zane.site;
                siteLink.href = zane.siteLink;
                descrip.innerHTML = zane.descrip;
                vimeo.src = zane.vimeo;
                break;
            case 'megan':
                photo.src = megan.photo;
                name.innerHTML = megan.name;
                instaLink.innerHTML = megan.insta;
                instaLink.href = megan.instaLink;
                siteLink.innerHTML = megan.site;
                siteLink.href = megan.siteLink;
                descrip.innerHTML = megan.descrip;
                vimeo.src = megan.vimeo;
            break;
            case 'christie':
                photo.src = christie.photo;
                name.innerHTML = christie.name;
                siteLink.innerHTML = christie.site;
                siteLink.href = christie.siteLink;
                descrip.innerHTML = christie.descrip;
                vimeo.src = christie.vimeo;
            break;
            case 'emw':
                photo.src = emw.photo;
                name.innerHTML = emw.name;
                instaLink.innerHTML = emw.insta;
                instaLink.href = emw.instaLink;
                siteLink.innerHTML = emw.site;
                siteLink.href = emw.siteLink;
                descrip.innerHTML = emw.descrip;
                vimeo.src = emw.vimeo;
            break;
            case 'eileen':
                photo.src = eileen.photo;
                name.innerHTML = eileen.name;
                siteLink.innerHTML = eileen.site;
                siteLink.href = eileen.siteLink;
                descrip.innerHTML = eileen.descrip;
                vimeo.src = eileen.vimeo;
            break;
          }
        //add pipes when there are insta values, when no insta, move site link over
          if(instaLink2.innerHTML != ''){
            insta2Pipe.innerHTML = '&nbsp;&nbsp; | &nbsp;&nbsp;';
          }
          if(instaLink.innerHTML != ''){
            insta1Pipe.innerHTML = '&nbsp;&nbsp; | &nbsp;&nbsp;';
          }else{
            siteLink.style.marginLeft = '-8px';
          }
          nonModal.style.filter = 'blur(4px)';
          show(modalWrap);
        })
      })    
}

openBio();

//when clicked x close modal, unblur background, and remove all values from insta links and pipes
closeModal.onclick = function(){
    hide(modalWrap);
    nonModal.style.filter = 'blur(0px)';
    setTimeout(function(){
        instaLink.innerHTML = '';
        instaLink.href = '';
        instaLink2.innerHTML = '';
        instaLink2.href = '';
        insta2Pipe.innerHTML = '';
        insta1Pipe.innerHTML = '';
    }, 600);
}

//when clicked outside of modal close modal, unblur background, and remove all values from insta links and pipes
window.onclick = function(event) {
    if (event.target == modalWrap) {
        hide(modalWrap);
        nonModal.style.filter = 'blur(0px)';
        setTimeout(function(){
            instaLink.innerHTML = '';
            instaLink.href = '';
            instaLink2.innerHTML = '';
            instaLink2.href = '';
            insta2Pipe.innerHTML = '';
            insta1Pipe.innerHTML = '';
        }, 600);
    }
  }

function show(element){
    element.style.visibility = 'visible';
    element.style.opacity = '1.0';
}

function hide(element){
    element.style.visibility = 'hidden';
    element.style.opacity = '0.0';
}