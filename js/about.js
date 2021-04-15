//When u click the modal it appears with the name, insta, site, photo, and video of the object with the corresponding id
//modal
let modalWrap = document.getElementById('modalBg'),
    closeModal = document.getElementById('closeModal'),
    nonModal = document.getElementById('nonModalWrap'),
    name = document.getElementById('name'),
    instaLink = document.getElementById('instaLink'),
    linkedinLink = document.getElementById('linkedinLink'),
    siteLink = document.getElementById('siteLink'),
    descrip = document.getElementById('descrip'),
    photo = document.getElementById('modalPic'),
    vimeo = document.getElementById('vimeo'),
    insta2Pipe = document.getElementById('insta2Pipe'),
    insta1Pipe = document.getElementById('insta1Pipe'),
    groupVid = document.getElementById('groupVid'),
    //playBtnWrap = document.getElementById('playBtnWrap'),
    //muteBtnWrap = document.getElementById('muteBtnWrap'),
    mobileProfiles = document.querySelectorAll('#bw'),
    mobilePersonalities = document.querySelectorAll('.personality');;

    setTimeout(()=>{
        modalWrap.style.display = 'grid';
    }, 1000);

/* playBtnWrap.addEventListener('click', ()=>{
    //gif.style.visibility = 'hidden';
    if(groupVid.paused){
        groupVid.play();
        playBtn.src = "../images/about/pause.png";
    }else{
        groupVid.pause();
        playBtn.src = "../images/about/play.png";
    }
}) */

/* playBtn.addEventListener('click', ()=>{
    //gif.style.visibility = 'hidden';
    if(groupVid.paused){
        groupVid.play();
        playBtn.src = "../images/about/pause.png";
    }else{
        groupVid.pause();
        playBtn.src = "../images/about/play.png";
    }
}) */

/* muteBtn.addEventListener('click', ()=>{
    //gif.style.visibility = 'hidden';
    if(!groupVid.muted){
        groupVid.muted = true;
        muteBtn.src = "../images/about/mute.png";
    }else{
        groupVid.muted = false;
        muteBtn.src = "../images/about/unmute.png";
    }
}) */

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

if(isMobile){
    mobileProfiles.forEach(item => {
        item.classList.remove('bioLink');
        item.classList.add('bioLinkMobile');
      });
}

class person {
    constructor(name, linkedin, insta, site, photo, vimeo, descrip) {
        this.name = name;
        this.insta = '@' + insta;
        this.linkedin = 'https://www.linkedin.com/in/' + linkedin;
        this.instaLink = 'https://www.instagram.com/' + insta;
        this.siteLink = "https://" + site;
        this.site = site;
        this.photo = "../images/headshots/normalColor/" + photo;
        this.vimeo = 'https://player.vimeo.com/video/' + vimeo;
        this.descrip = descrip;
    }
}

let abby = new person('Abby Blend', 'abby-blend-96a363198', 'abbyblendart', 'abbyblend.com','abby1.png', '473391054',
"Hello, I’m Abby! From UX/UI to branding to photography, I am excited by so many areas of design. I love the feeling when I make a connection that sparks a new concept or stylistic choice. In my free time, I’m either listening to newly-discovered music on repeat or finding reasons to talk about French&nbsp;culture.");

let dani = new person('Danielle Berman', '', 'daniberman.dzn', 'daniberman.com','dani1.png', '473925447',
"Hello! I’m Dani, a passionate creative who enjoys experimenting, researching, and learning! When I’m not designing you can probably find me creating memories or making some coffee to bring back to my Adobe file. I am constantly fascinated by all of the different ways to communicate visually and am grateful to have found my voice in design. I cannot wait to see what the future&nbsp;holds!");

let carly = new person('Carly Blonski', 'carly-blonski-a60178130', 'carlyblonski.dzn', 'carlyblonski.com ','carly1.png', '478775803',
"Hi! I’m Carly Blonski! I’m in more engineering clubs than any non-engineer should ever be in and I’m super involved in THON. I love exploring historic buildings, architecture, theme parks, and looking at all of the details in their designs. When I’m not doing all of that, or serving at the State College classic, The Corner Room, you can catch me dancing and singing along to&nbsp;throwbacks.");

let ron = new person('Ron Feinberg', 'ronald-feinberg-094379113', 're.fein', 'refein.com','ron1.png', '473497882',
"Hello adventurers of the internet! Ron is the name and versatility is the game. Offbeat creative and music head who can’t seem to stop picking up new hobbies. I would tell you to try and keep up with my antics, but I don't want to see you out of&nbsp;breath.");

let amber = new person('Amber Lai', 'amber-lai-233471160', 'amsterbunny.jpg', 'amberglai.com','amber1.png', '473544996',
"Hey, I'm Amber! I wear a lot of black and dark colours, but deep down inside, I'm wearing really cute socks, and honestly that sums up my whole aesthetic. Traveling, food, and culture are a few of the things that excite me the most, and sharing it with others is what makes me happiest! Being able to make connections between my interests, cultures, and people is probably my greatest inspiration as a&nbsp;designer.");

let michaela = new person('Michaela Lucas', 'michaela-lucas-980371198', 'm_m_lucas', 'michaelalucas.com','michaela1.png', '473535019',
"Michaela dislikes talking about herself, so I will be writing this. Michaela thrives in inventing clever and creative concepts in her designs, much like inventing a narrator to dictate this bio. When she's not watching an A24 film or reading a coffee table book to pull inspiration from, you can find her wandering around looking for an interesting shadow or reflection to&nbsp;photograph.");

let cassie = new person('Cassie Luzenski', 'cassie-luzenski-628a97166', 'cassieluzenski', 'cassieluzenski.com','cassie1.png', '473278686',
"Hi! I'm Cassie! I'm a graphic designer, photographer, chronic doodler and enthusiast of the color yellow. Outside of design you can find me curled up under a heated blanket watching my favorite tv show – Peaky Blinders – and eating pancakes (yes even for&nbsp;dinner).");

let sarah = new person('Sarah Martin', 'sarah-martin-694079181', 'martindesign_', 'sarahmartindesign.com','sarah1.png', '478735975',
"Hello friends, I’m Sarah! If I’m not thinking of witty comments to stir the pot a little bit, I’m more than likely thinking of how to create a high end photoshoot on a budget. I’m passionate about supporting real women and breaking unhealthy social norms. My weaknesses include smoothie bowls, fictional stories, cute animals, and mostly interior&nbsp;design.");

let taylor = new person('Taylor Mazzarella', 'taylor-mazzarella-b2391b181', 'tmz.dzn', 'taylormazzarella.com','taylor1.png', '473537077',
"Hey, what’s up? I’m Taylor! I’m dedicated to creating purposeful design that packs a punch, but when I’m not doing that, you can find me rollerblading to an ABBA album (Waterloo of&nbsp;course).");

let tamar = new person('Tamar Najarian', 'tamar-najarian-7baa31180', 'bytamar_', 'tamarnajarian.com','tamar1.png', '473319684',
"Hey there, I’m Tamar. I’ll start off by saying I am 100% Armenian which is such a big part of my identity and can be seen throughout my designs. Some of my favorite things include cats, listening to music, and spending time with family and&nbsp;friends.");

let emp = new person('Emily Parker', 'emilylanaparker', 'emma.jeanbean', 'emilylana.com','emp1.png', '473455302',
"Hey, I'm Emily Parker! A driven creative interested in packaging, branding & print design. When I'm not staring at an InDesign file, you can usually find me outside - hiking, kayaking, planning photoshoots, or searching for the closest coffee&nbsp;shop.");

let jackie = new person('Jackie Siry', 'jacqueline-siry-142a5519b', 'artxjac', 'jackiesiry.com','jac1.png', '478232627',
"Hi, I'm Jackie, a creative trained in design with a strong flair for Visual Arts. I'm not really sure what to say about myself so I'm just going to list some things I like. My favorite song is a toss up between Take Off Your Cool by Outkast (Featuring Norah Jones) or A Fond Farewell by Elliott Smith. My favorite word is 'extravaganza'. My favorite color is a light cool blue, much like the background color of my individual video that you should totally check&nbsp;out!");

let sam = new person('Samantha Smith', 'samantha-smith-590b2a177', 'blueyedblony16', 'smsmth.com','sam1.png', '474533790',
"Hey there I'm Sam Smith! No, not the British pop idol (although our resemblance is shocking). Outside of class you can find me slinging bagels at my side-hustle, rewatching The Office, and keeping up with the latest&nbsp;memes!");

let zane = new person('Zane Sommese', 'zanesommese', 'legoknife', 'zanesommese.com','zane1.png', '474013273',
"Hey I'm Zane. I hate talking about myself so I'll make this short. I'm passionate about design and really enjoy photography. I love vintage clothes and sometimes I make a hell of a poster or two in my spare time. Also typography is&nbsp;cool.");

let megan = new person('Megan Tam', 'megan-tam', 'megtamdesign', 'megtam.com','megan1.png', '477235278',
"Hi, I'm Megan! I find great satisfaction in discovering the back story or concept that a design piece is based on. Other times, I'm probably looping my newest find on Spotify, planning my next getaway, or embracing that I'm the main character. Currently casting supporting roles&nbsp;only.");

let christie = new person('Christie Warren', 'christina-warren', '', 'christiewarren.github.io','christie1.png', '473929340',
"Hi there! I'm Christie, and around here I've earned the title of 'The One Who Likes to Code' and more prestigiously, 'The One Who Loves That Dancing Otter Video.' Human-centered UI & UX design is the name of my game, and I'm always working to expand my technical skillset. In my free time I love rock climbing, biking, kayaking, and&mdash;let's face it&mdash;talking to my pets like they're&nbsp;humans.");

let emw = new person('Emily Watkins', 'emily-watkins1', 'emilywatkins5', 'emily-watkins.com','emw1.png', '473262706',
"Hi, I’m Emily. I believe working with others to solve design problems is the most rewarding part of being a designer. I aim to always be bold in everything I do and make a mark on everyone I meet. When taking a break from design, you can find me around good people listening to good&nbsp;music.");

let eileen = new person('Eileen Yu', 'eileen-yu-615432155', '', 'eileenyudesign.com','eileen1.png', '475029392',
"Hi! I'm Eileen! I love all spicy food, and will not get bored even if I eat hot-pot 10 days in a row. I'm passionate about learning about people and seaking meaning in their stories to broaden my understanding of life and design. Outside of design, you can see me with my guitar or camera, or taking a walk on a sunny&nbsp;day.");

function openBio(){
    document.querySelectorAll('.bioLink').forEach(item => {
        item.addEventListener('click', event => {
          let id = item.id;
          switch (id) {
            case 'abby':
                photo.src = abby.photo;
                name.innerHTML = abby.name;
                linkedinLink.href = abby.linkedin;
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
                linkedinLink.href = dani.linkedin;
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
                linkedinLink.href = carly.linkedin;
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
                linkedinLink.href = ron.linkedin;
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
                linkedinLink.href = amber.linkedin;
                instaLink.innerHTML = amber.insta;
                instaLink.href = amber.instaLink;
                siteLink.innerHTML = amber.site;
                siteLink.href = amber.siteLink;
                descrip.innerHTML = amber.descrip;
                vimeo.src = amber.vimeo;
                break;
            case 'michaela':
                photo.src = michaela.photo;
                name.innerHTML = michaela.name;
                linkedinLink.href = michaela.linkedin;
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
                linkedinLink.href = cassie.linkedin;
                instaLink.innerHTML = cassie.insta;
                instaLink.href = cassie.instaLink;
                siteLink.innerHTML = cassie.site;
                siteLink.href = cassie.siteLink;
                descrip.innerHTML = cassie.descrip;
                vimeo.src = cassie.vimeo;
                break;
            case 'sarah':
                photo.src = sarah.photo;
                name.innerHTML = sarah.name;
                linkedinLink.href = sarah.linkedin;
                instaLink.innerHTML = sarah.insta;
                instaLink.href = sarah.instaLink;
                siteLink.innerHTML = sarah.site;
                siteLink.href = sarah.siteLink;
                descrip.innerHTML = sarah.descrip;
                vimeo.src = sarah.vimeo;
                break;
            case 'taylor':
                photo.src = taylor.photo;
                name.innerHTML = taylor.name;
                linkedinLink.href = taylor.linkedin;
                instaLink.innerHTML = taylor.insta;
                instaLink.href = taylor.instaLink;
                siteLink.innerHTML = taylor.site;
                siteLink.href = taylor.siteLink;
                descrip.innerHTML = taylor.descrip;
                vimeo.src = taylor.vimeo;
                break;
            case 'tamar':
                photo.src = tamar.photo;
                name.innerHTML = tamar.name;
                linkedinLink.href = tamar.linkedin;
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
                linkedinLink.href = emp.linkedin;
                instaLink.innerHTML = emp.insta;
                instaLink.href = emp.instaLink;
                siteLink.innerHTML = emp.site;
                siteLink.href = emp.siteLink;
                descrip.innerHTML = emp.descrip;
                vimeo.src = emp.vimeo;
                break;
            case 'jackie':
                photo.src = jackie.photo;
                name.innerHTML = jackie.name;
                linkedinLink.href = jackie.linkedin;
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
                linkedinLink.href = sam.linkedin;
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
                linkedinLink.href = zane.linkedin;
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
                linkedinLink.href = megan.linkedin;
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
                linkedinLink.href = christie.linkedin;
                siteLink.innerHTML = christie.site;
                siteLink.href = christie.siteLink;
                descrip.innerHTML = christie.descrip;
                vimeo.src = christie.vimeo;
            break;
            case 'emw':
                photo.src = emw.photo;
                name.innerHTML = emw.name;
                linkedinLink.href = emw.linkedin;
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
                linkedinLink.href = eileen.linkedin;
                siteLink.innerHTML = eileen.site;
                siteLink.href = eileen.siteLink;
                descrip.innerHTML = eileen.descrip;
                vimeo.src = eileen.vimeo;
            break;
          }
        //add pipes when there are insta values, when no insta, move site link over
          /* if(instaLink2.innerHTML != ''){
            insta2Pipe.innerHTML = '&nbsp;&nbsp; | &nbsp;&nbsp;';
          } */
          if(instaLink.innerHTML != ''){
            insta1Pipe.innerHTML = '&nbsp;&nbsp; | &nbsp;&nbsp;';
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
    vimeo.src = '';
    photo.src = '';
    nonModal.style.filter = 'blur(0px)';
    setTimeout(function(){
        instaLink.innerHTML = '';
        instaLink.href = '';
        //insta2Pipe.innerHTML = '';
        insta1Pipe.innerHTML = '';
    }, 600);
}

//when clicked outside of modal close modal, unblur background, and remove all values from insta links and pipes
window.onclick = function(event) {
    if (event.target == modalWrap) {
        hide(modalWrap);
        vimeo.src = '';
        nonModal.style.filter = 'blur(0px)';
        setTimeout(function(){
            photo.src = '';
            instaLink.innerHTML = '';
            instaLink.href = '';
            //insta2Pipe.innerHTML = '';
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