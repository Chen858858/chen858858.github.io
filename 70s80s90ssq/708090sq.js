/*
	song quote array format
	[["artist name dob/(if necessary dob)", "artist image source", [["album name release year", "album image source", ["quote", "song name", "song youtube"]]]]]
*/

var didSongs = [];

function genQuote(){
	if(didSongs.length == artistNamesDependingOnAmountSongs.length) didSongs = [];
	var artistNamesDependingOnAmountSongsNum = Math.floor(Math.random() * artistNamesDependingOnAmountSongs.length);
	var artistNum = artistNamesDependingOnAmountSongs[artistNamesDependingOnAmountSongsNum];
	var albumNum = Math.floor(Math.random() * songQuotes[artistNum][2].length + 0);
	var songNum = Math.floor(Math.random() * songQuotes[artistNum][2][albumNum][2].length + 0);
	if(didSongs.includes(artistNum + ">" + albumNum + ">" + songNum)){
		genQuote();
	}
	else{
		document.getElementById("artist-mod").innerHTML = songQuotes[artistNum][0];
		document.getElementById("artist-img").src = songQuotes[artistNum][1];
		document.getElementById("artist-img-link").setAttribute("href", songQuotes[artistNum][1]);
		document.getElementById("album-mod").innerHTML = songQuotes[artistNum][2][albumNum][0];
		document.getElementById("album-img").src = songQuotes[artistNum][2][albumNum][1];
		document.getElementById("album-img-link").setAttribute("href", songQuotes[artistNum][2][albumNum][1]);
		document.getElementById("quote-mod").innerHTML = songQuotes[artistNum][2][albumNum][2][songNum][0];
		document.getElementById("song-mod").innerHTML = songQuotes[artistNum][2][albumNum][2][songNum][1];
		// document.getElementById("song-iframe").src = "https://youtube.com/embed/" + songQuotes[artistNum][2][albumNum][2][songNum][2];
		document.getElementById("song-yt-thumbnail").src = "https://img.youtube.com/vi/" + songQuotes[artistNum][2][albumNum][2][songNum][2] + "/0.jpg";
		document.getElementById("to-youtube").setAttribute("href", "https://youtube.com/watch?v=" + songQuotes[artistNum][2][albumNum][2][songNum][2]);
		didSongs.push(artistNum + ">" + albumNum + ">" + songNum);
	}
}

var rotating = false;

function rotateIcon(){
	if(rotating == false){
		document.getElementById("gen-icon").style.animation = "rotater 600ms linear 1";
		rotating = true;
		setTimeout(rotateIcon, 800);
	}
	else{
		document.getElementById("gen-icon").style.animation = "";
		rotating = false;
	}
}


var wordNum = 0;
function genWords(){
	// console.log(wordNum);
	if(wordNum < introWords.length ){
		document.getElementById("intro-words").innerHTML = introWords[wordNum] + "<div style=\"height: 10px;\">&ensp;</div>";
		var waitTime = introWords[wordNum].length * 100;
		if(introWords[wordNum].length <= 5) waitTime = introWords[wordNum].length * 300;
		if(introWords[wordNum].length <= 10) waitTime = introWords[wordNum].length * 200;
		wordNum++;
		setTimeout(genWords, waitTime)
	}
	else{
		document.getElementById("intro-words").remove();
	}
}

var titleString = "70's, 80's, and some 90's Song Quotes Generator";
var titleCharNum = 0;
function genTitle(){
	if(titleCharNum <= titleString.length){
		document.getElementById("site-title").innerHTML = titleString.substring(0, titleCharNum);
		titleCharNum++;
		setTimeout(genTitle, 120);
	}
}

var songQuotes = [
	// ABBA
	["ABBA<br><small>(1972-1982,<br>2016-present)</small>", "https://www.gannett-cdn.com/presto/2021/11/04/USAT/f89a63ae-8d41-420d-ae29-bd7eda2bd51f-ABBA_2021_photo_credit_Baillie_Walsh_1.jpg", [
		["ABBA<br><small>(1975)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/ABBA_-_ABBA_%281975%2C_Original_Polar_LP%29.jpg/220px-ABBA_-_ABBA_%281975%2C_Original_Polar_LP%29.jpg", [
			["Where are those happy days, they seem so hard to find<br>I tried to reach for you, but you have closed your mind<br>Whatever happened to our love?<br>I wish I understood<br>It used to be so nice, it used to be so good", "SOS", "cvChjHcABPA"],
			["So when you're near me, darling can't you hear me<br>S. O. S.<br>The love you gave me, nothing else can save me<br>S. O. S.<br>When you're gone<br>How can I even try to go on?<br>When you're gone<br>Though I try how can I carry on?", "SOS", "cvChjHcABPA"]
		]],
		["Arrival<br><small>(1976)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/ABBA_-_Arrival.png/220px-ABBA_-_Arrival.png", [
			["You are the dancing queen<br>Young and sweet<br>Only seventeen<br>Dancing queen<br>Feel the beat from the tambourine, oh yeah<br>You can dance<br>You can jive<br>Having the time of your life<br>Ooh, see that girl<br>Watch that scene<br>Dig in the dancing queen", "Dancing Queen", "xFrGuyw1V8s"]
		]],
		["Greatest Hits Vol. 2<br><small>(1979)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/ABBA_-_Greatest_Hits_Vol._2_%28Polar%29.jpg/220px-ABBA_-_Greatest_Hits_Vol._2_%28Polar%29.jpg", [
			["Gimme, gimme, gimme a man after midnight<br>Won't somebody help me<br>Chase the shadows away<br>Gimme, gimme, gimme a man after midnight<br>Take me through the darkness<br>To the break of the day", "Gimme! Gimme! Gimme! (A Man After Midnight)", "XEjLoHdbVeE"]
		]]
	]],
	// ABDUL, PAULA
	["Paula Abdul<br><small>(born 19 June 1962)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Paula_Abdul_2011_2.jpg/220px-Paula_Abdul_2011_2.jpg", [
		["Forever Your Girl<br><small>(1988)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Forever_Your_Girl_-_Paula_Abdul.PNG/220px-Forever_Your_Girl_-_Paula_Abdul.PNG", [
			["Straight up, now tell me<br>Do you really wanna love me forever<br>Oh, oh, or am I caught in a hit and run?<br>Straight up, now tell me<br>Is it gonna be you and me together<br>Oh, oh, oh, or are you just havin' fun", "Straight Up", "El1kgCqD7Xk"]
		]]
	]],
	// CAMEO
	["Cameo<br><small>(1974-present)</small>", "https://s3.amazonaws.com/cdn.blackpast.org/wp-content/uploads/20190127010446/Cameo_2016.jpg", [
		["Word Up!<br><small>(1986)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Cameo-Word_Up%21_%28album_cover%29.jpg/220px-Cameo-Word_Up%21_%28album_cover%29.jpg", [
			["Wave your hands in the air like you don't care<br>Glide by the people as they start to look and stare<br>Do your dance, do your dance, do your dance quick mamma<br>Come on baby tell me what's the word<br>Word up everybody says<br>When you hear the call you've got to get it underway", "Word Up!", "MZjAantupsA"],
			["Now all you sucker DJ's<br>Who think you're fly<br>There's got to be a reason<br>And we know the reason why<br>Why you put on those airs<br>And you act real cool<br>Got to realize that you're acting like fools", "Word Up!", "MZjAantupsA"]
		]]
	]],
	// COLLINS, PHIL
	["Phil Collins<br><small>(born 30 January 1951)</small>", "https://pbs.twimg.com/profile_images/1032664294108946432/9sM56M6Q_400x400.jpg", [
		["Against All Odds: Music from the Original Motion Picture Soundtrack", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Against_All_Odds_soundtrack.jpg/220px-Against_All_Odds_soundtrack.jpg", [
			["So take a look at me now<br>Well there's just an empty space<br>And there's nothing left here to remind me<br>Just the memory of your face<br>Ooh, take a look at me now<br>Well there's just an empty space<br>And you coming back to me is against the odds<br>And that's what I've got to face", "Against All Odds (Take a Look at Me Now)", "wuvtoyVi7vY"]
		]],
		["No Jacket Required<br><small>(1985)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Phil_Collins_-_No_Jacket_Required.png/220px-Phil_Collins_-_No_Jacket_Required.png", [
			["Like a river to the sea<br>I will always be with you<br>And if you sail away<br>I will follow you", "One More Night", "zKVq-P3z5Vg"]
		]],
		["...But Seriously<br><small>(1989)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Phil_Collins-But_Seriously.jpg/220px-Phil_Collins-But_Seriously.jpg", [
			["Oh think twice,<br>It's another day for you and me in paradise<br>Oh think twice,<br>'cause it's just another day for you,<br>You and me in paradise,<br>Think about it", "Another Day in Paradise", "Qt2mbGP6vFI"]
		]]
	]],
	// DAYNE, TAYLOR
	["Taylor Dayne<br><small>(born 7 March 1962)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Taylor_Dayne_2016.jpg/220px-Taylor_Dayne_2016.jpg", [
		["Tell It to My Heart<br><small>(1988)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Taylor_Dayne_%E2%80%93_Tell_It_to_My_Heart_%28album_cover%29.jpg/220px-Taylor_Dayne_%E2%80%93_Tell_It_to_My_Heart_%28album_cover%29.jpg", [
			["Tell it to my heart<br>Tell me I'm the only one<br>Is this really love or just a game?<br>Tell it to my heart<br>I can feel my body rock<br>Every time you call my name", "Tell It to My Heart", "Ud6sU3AclT4"]
		]]
	]],
	// EURYTHMICS
	["Eurythmics<br><small>(1980-1990,<br>1999-2005)</small>", "https://images-na.ssl-images-amazon.com/images/I/B1IMvo3MHFS._CR0,0,3840,2880_._SL1000_.jpg", [
		["Sweet Dreams (Are Made of This)<br><small>(1983)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Eurythmics_-_Sweet_Dreams_%28Are_Made_of_This%29.jpg/220px-Eurythmics_-_Sweet_Dreams_%28Are_Made_of_This%29.jpg", [
			["Sweet dreams are made of this<br>Who am I to disagree?<br>I travel the world<br>And the seven seas,<br>Everybody's looking for something<br>Some of them want to use you<br>Some of them want to get used by you<br>Some of them want to abuse you<br>Some of them want to be abused", "Sweet Dreams (Are Made of This)", "qeMFqkcPYcg"]
		]]
	]],
	// FALCO
	["Falco / Johann H&#246;lzel<br><small>(born 19 February 1957,<br>died 6 February 1998)</small>", "https://ichef.bbci.co.uk/images/ic/960x540/p04pqjrz.jpg",[
		["Falco 3<br><small>(1985)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Falco_Falco_3_CD_cover.JPG/220px-Falco_Falco_3_CD_cover.JPG", [
			["Er war Superstar<br>(English: He was a superstar)<br>Er war popul&#228;r<br>(English: He was popular)<br>Er war so exaltiert<br>(English: He was so exalted)<br>Because er hatte Flair<br>(English: Because he had flair)<br>Er war ein Virtuose<br>(English: He was a virtuoso)<br>War 'n Rockidol<br>(English: Was a rockidol)<br>Und alles rief<br>(English: And everyone shouted)<br>&bdquo;Come and rock me Amadeus&ldquo;", "Rock Me Amadeus", "cVikZ8Oe_XA"]
		]]
	]],
	// FLEETWOOD MAC
	["Fleetwood Mac<br><small>(1967-1995,<br>1996-present)</small>","https://www.rollingstone.com/wp-content/uploads/2018/06/fleetwood-mac-new-lineup-first-picture-2018-77e1da91-6a10-46d3-8b48-a203c150139c.jpg",[
		["Rumours<br><small>(1977)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/FMacRumours.PNG/220px-FMacRumours.PNG",[
			["Don't stop thinking about tomorrow<br>Don't stop, it'll soon be here<br>It'll be, better than before<br>Yesterday's gone, yesterday's gone", "Don't Stop", "QV9JJmSCiI8"],
			["Thunder only happens when it's raining<br>Players only love you when they're playing<br>Say women they will come and they will go<br>When the rain washes you clean, you'll know, you'll know", "Dreams", "XecDz-o-KnY"],
			["You can go your own way<br>Go your own way<br>You can call it<br>Another lonely day<br>You can go your own way<br>Go your own way", "Go Your Own Way", "ozl3L9fhKtE"]
		]],
		["Tango in the Night<br><small>(1987)", "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Fleetwood_Mac_-_Tango_in_the_Night.png/220px-Fleetwood_Mac_-_Tango_in_the_Night.png",[ 
			["If I live to see the seven wonders<br>I'll make a path to the rainbow's end<br>I'll never live to match the beauty again<br>The rainbow's end", "Seven Wonders", "9b4F_ppjnKU"]
		]]
	]],
	// FOREIGNER
	["Foreigner<br><small>(1976-present)</small>", "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-181684-163248891.jpg?resize=900,600&w=450", [
		["4<br><small>(1981)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Foreigner_-_4.jpg/220px-Foreigner_-_4.jpg", [
			["I've been waiting for a girl like you to come into my life<br>I've been waiting for a girl like you, your loving will survive<br>I've been waiting for someone new to make me feel alive<br>Yeah, waiting for a girl like you to come into my life", "Waiting for a Girl Like You", "5jhocSCSZzk"]
		]],
		["Foreigner<br><small>(1977)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Foreigner_debut.jpg/220px-Foreigner_debut.jpg", [
			["You're as cold as ice<br>You're willing to sacrifice our love<br>You never take advice<br>Someday you'll pay the price, I know", "Cold as Ice", "mjwV5w0IrcA"]
		]]
	]],
	// GABRIEL, PETER
	["Peter Gabriel<br><small>(born 13 February 1950)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Peter_Gabriel_%283%29_%28cropped%29.jpg/220px-Peter_Gabriel_%283%29_%28cropped%29.jpg", [
			["So<br><small>(1986)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/So_%28album%29.png/220px-So_%28album%29.png", [
				["In your eyes<br>The light the heat<br>In your eyes<br>I am complete<br>In your eyes<br>I see the doorway to a thousand churches<br>In your eyes<br>The resolution of all the fruitless searches<br>In your eyes<br>I see the light and the heat<br>In your eyes<br>Oh, I want to be that complete<br>I want to touch the light<br>The heat I see in your eyes", "In Your Eyes", "kU8OJAOMbPg"]
			]]
	]],
	// GENESIS
	["Genesis<br><small>(1967-1998,<br>2007-2007,<br>2020-2022)", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2180_-_Pittsburgh_-_Mellon_Arena_-_Genesis_-_The_Carpet_Crawlers.JPG/267px-2180_-_Pittsburgh_-_Mellon_Arena_-_Genesis_-_The_Carpet_Crawlers.JPG", [
		["Invisible Touch<br><small>(1986)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/InvisibleTouch86.jpg/220px-InvisibleTouch86.jpg", [
			["There's too many men<br>Too many people<br>Making too many problems<br>And not much love to go round<br>Can't you see<br>This is a land of confusion<br>This is the world we live in<br>And these are the hands we're given<br>Use them and let's start trying<br>To make it a place worth living in", "Land of Confusion", "Yq7FKO5DlV0"]
		]]
	]],
	// HART, COREY
	["Corey Hart<br><small>(born 31 May 1962)",  "https://yt3.ggpht.com/ytc/AKedOLSKHrgSkKZC5oERJYrLgfpnXcR8uWfmdlMsjKc1=s900-c-k-c0x00ffffff-no-rj", [
		["Boy in the Box<br><small>(1985)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Boy_in_the_Box_%28Corey_Hart_album_-_cover_art%29.jpg/220px-Boy_in_the_Box_%28Corey_Hart_album_-_cover_art%29.jpg", [
			["So if you're lost and on your own<br>You can never surrender<br>And if your path won't lead you home<br>You can never surrender<br>And when the night is cold and dark<br>You can see, you can see light<br>Cause no one can take away your right<br>To fight and never surrender", "Never Surrender", "-4pg6Jh94Lo"]
		]]
	]],
	// HEART
	["Heart<br><small>(1973-present)</small>", "https://upload.wikimedia.org/wikipedia/commons/2/21/Nancy_and_Ann_Wilson.jpg", [
		["Heart<br><small>(1985)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Heart_%28Heart_album%29.png/220px-Heart_%28Heart_album%29.png", [
			["We can't go on<br>Just running away<br>If we stay any longer<br>We will surely never get away<br>Whoa, oh, anything you want we can make it happen<br>Stand up and turn around<br>Never let them shoot us down<br>Never<br>Never<br>Never<br>Never run away", "Never", "zWzy5q_M5Ho"],
			["These dreams go on when I close my eyes<br>Every second of the night<br>I live another life<br>These dreams that sleep when it's cold outside<br>Every moment I'm awake<br>The further I'm away", "These Dreams", "41P8UxneDJE"]
		]]
	]],
	// JOEL, BILLY
	["Billy Joel<br><small>(born 9 May 1949)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Billy_Joel_Shankbone_NYC_2009.jpg/220px-Billy_Joel_Shankbone_NYC_2009.jpg", [
		["52nd Street<br><small>(1978)</small>", "https://upload.wikimedia.org/wikipedia/en/9/94/Billy_Joel_52nd_Street_album_cover.JPG", [
			["Honesty is such a lonely word<br>Everyone is so untrue<br>Honesty is hardly ever heard<br>And mostly what I need from you", "Honesty", "SuFScoO4tb0"]
		]],
		["Piano Man<br><small>(1973)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Billy_Joel_-_Piano_Man.jpg/220px-Billy_Joel_-_Piano_Man.jpg", [ 
			["Sing us a song, you're the piano man<br>Sing us a song tonight<br>Well, we're all in the mood for a melody<br>And you've got us feelin' alright", "Piano Man", "gxEPV4kolz0"]
		]]
	]],
	// JONES, HOWARD
	["Howard Jones<br><small>(born 23 February 1955)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Howard_Jones_%28musician%29.JPG/220px-Howard_Jones_%28musician%29.JPG", [
		["Dream into Action<br><small>(1985)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/HowardJonesDreamIntoAction.jpg/220px-HowardJonesDreamIntoAction.jpg", [
			["And do you feel scared<br>I do<br>But I won't stop and falter<br>And if we threw it all away<br>Things can only get better", "Things Can Only Get Better", "-OO9LloDSJo"]
		]]
	]],
	// MELLENCAMP, JOHN
	["John Mellencamp<br><small>(born 7 October 1951)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mellencamp.jpg/250px-Mellencamp.jpg", [
		["Uh-huh<br><small>(1983)</small>", "https://upload.wikimedia.org/wikipedia/en/5/59/John_Cougar_Mellencamp-Uh-Huh_%28album_cover%29.jpg", [
			["And there's winners, and there's losers<br>But they ain't no big deal<br>'Cause the simple man baby pays the thrills<br>The bills and the pills that kill", "Pink Houses", "qOfkpu6749w"]
		]]
	]],
	// MEN AT WORK
	["Men at Work<br><small>(1979-1986,<br>1996-2002,<br>2019-present)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Men_At_Work_1983.jpg/220px-Men_At_Work_1983.jpg", [
		["Business as Usual<br><small>(1981)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Businessasusual-aus.jpg/220px-Businessasusual-aus.jpg", [
			["Do you come from a land down under?<br>Where women glow and men plunder?<br>Can't you hear, can't you hear the thunder?<br>You better run, you better take cover", "Down Under", "XfR9iY5y94s"]
		]],
		["Cargo<br><small>(1983)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Men_at_Work_-_Cargo.jpg/220px-Men_at_Work_-_Cargo.jpg", [
			["Day after day it reappears<br>Night after night my heartbeat shows the fear<br>Ghosts appear and fade away<br>Come back another day", "Overkill", "RY7S6EgSlCI"]
		]]
	]],
	// MICHAEL, GEORGE
	["George Michael<br><small>(born 25 June 1963,<br>died 25 December 2016</small>", "https://ichef.bbci.co.uk/news/660/cpsprodpb/8088/production/_93140923_mediaitem93140405.jpg", [
		["Faith<br><small>(1987)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/GeorgeMichaelFaithAlbumcover.jpg/220px-GeorgeMichaelFaithAlbumcover.jpg", [
			["If you are the desert<br>I'll be the sea<br>If you ever hunger<br>Hunger for me<br>Whatever you ask for<br>That's what I'll be", "Father Figure", "m_9hfHvQSNo"]
		]]
	]],
	// NICKS, STEVIE
	["Stevie Nicks<br><small>(born 26 May 1948)", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Stevie_Nicks_Austin_2017_%2813%29.jpg/220px-Stevie_Nicks_Austin_2017_%2813%29.jpg", [
		["Bella Donna<br><small>(1981)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Stevie_Nicks_-_Bella_Donna.png/220px-Stevie_Nicks_-_Bella_Donna.png", [
			["Just like the white winged dove<br>Sings a song<br>Sounds like she's singing<br>Who who who<br>Just like the white winged dove<br>Sings a song<br>Sounds like she's singing<br>Oh baby oh said oh", "Edge of Seventeen", "UmPgMc3R8zg"],
			["I went today<br>Maybe I will go again<br>Tomorrow<br>And the music there it was hauntingly<br>Familiar<br>And I see you doing <br>What I try to do for me<br>With the words from a poet<br>And the voice from a choir<br>And a melody<br>Nothing else mattered", "Edge of Seventeen", "UmPgMc3R8zg"],
			["Lovers forever<br>Face to face<br>My city your mountains<br>Stay with me stay<br>I need you to love me<br>I need you today<br>Give to me your leather<br>Take from me my lace", "Leather and Lace", "Ob4cgakHwsQ"]
		]]
	]],
	// PETTY, TOM
	["Tom Petty<br><small>(born 20 October 1950,<br>died 2 October 2017)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tom_Petty_Live_in_Horsens_%28cropped2%29.jpg/220px-Tom_Petty_Live_in_Horsens_%28cropped2%29.jpg", [
		["Full Moon Fever<br><small>(1989)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Tom_Petty_Full_Moon_Fever.jpg/220px-Tom_Petty_Full_Moon_Fever.jpg", [
			["No, I'll stand my ground<br>Won't be turned around<br>And I'll keep this world from dragging me down<br>Gonna stand my ground<br>And I won't back down", "I Won't Back Down", "nvlTJrNJ5lA"]
		]]
	]],
	// PRINCE
	["Prince Rogers Nelson<br><small>(born 7 June 1958,<br>died 21 April 2016)</small>", "https://www.washingtonpost.com/resizer/vqUUkJYnPt8JaxBviW90xeLjtsY=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YGL2USUC6MI6TNMF4NVRNJJRVI.jpg", [
		["Parade<br><small>(1986)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/ParadeLP.jpg/220px-ParadeLP.jpg",[
			["You don't have to be rich<br>To be my girl<br>You don't have to be cool<br>To rule my world<br>Ain't no particular sign I'm more compatible with<br>I just want your extra time and your<br>Kiss", "Kiss", "H9tEvfIsDyo"]
		]],
		["Purple Rain<br><small>(1984)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Princepurplerain.jpg/220px-Princepurplerain.jpg", [
			["How can you just leave me standing?<br>Alone in a world that's so cold (so cold)<br>Maybe I'm just too demanding<br>Maybe I'm just like my father, too bold<br>Maybe you're just like my mother<br>She's never satisfied (she's never satisfied)<br>Why do we scream at each other?<br>This is what it sounds like<br>When doves cry", "When Doves Cry", "IUc0R8bbWQE"]
		]]
	]],
	// QUEEN
	["Queen<br><small>(1970-present)</small>", "https://images-na.ssl-images-amazon.com/images/I/C1YRnQIzuTS._SL1000_.png", [
		["The Works<br><small>(1984)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Queen_The_Works.png/220px-Queen_The_Works.png", [
			["I want to break free<br>I want to break free<br>I want to break free from your lies<br>You're so self satisfied<br>I don't need you<br>I've got to break free<br>God knows,<br>God knows I want to break free", "I Want to Break Free", "f4Mc-NYPHaQ"],
			["Let's hope you never leave old friend<br>Like all good things on you we depend<br>So stick around 'cause we might miss you<br>When we grow tired of all this visual<br>You had your time, you had the power<br>You've yet to have your finest hour<br>Radio (radio)", "Radio Ga Ga", "azdwsXLmrHE"]
		]],
	]],
	// ROXETTE
	["Roxette<br><small>(1986-2019)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Roxette_at_the_Beacon%2C_September_2012.jpg/280px-Roxette_at_the_Beacon%2C_September_2012.jpg", [
		["It Must Have Been Love (Christmas for the Broken Hearted) (single)<br><small>1987</small>", "https://upload.wikimedia.org/wikipedia/en/9/98/ItMustHaveBeenLove1987.jpg", [
				["It must have been love but it's over now<br>It must have been good but I lost it somehow<br>It must have been love but it's over now<br>From the moment we touched till the time had run out", "It Must Have Been Love", "k2C5TjS2sh4"]
		]],
		["Look Sharp!<br><small>(1988)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/LookSharp.jpg/220px-LookSharp.jpg", [
			["And there are voices that want to be heard<br>So much to mention but you can't find the words<br>The sense of magic, the beauty that's been<br>When love was wilder than the wind", "Listen to Your Heart", "yCC_b5WHLX0"],
			["She's got the look (She's got the look)<br>She's got the look (She's got the look)<br>What in the world can make a brown-eyed girl turn blue<br>When everything I'll ever do I'll do for you<br>And I go la la la la la<br>She's got the look", "The Look", "LlVI7ZNiFlI"]
		]]
	]],
	// SCORPIONS
	["Scorpions<br><small>(1965-present)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Scorpions_live_2010.jpg/300px-Scorpions_live_2010.jpg", [
		["Crazy World<br><small>(1990)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/ScorpionsCrazyWorld.jpg/220px-ScorpionsCrazyWorld.jpg", [
			["Take me to the magic of the moment<br>On a glory night<br>Where the children of tomorrow dream away (dream away)<br>In the wind of change", "Wind of Change", "n4RjJKxsamQ"]
		]]
	]],
	// SURVIVOR
	["Survivor<br><small>(1978-1988,<br>1993-present)</small>", "https://e.snmc.io/i/300/w/faa46e93feab4c8babfb54f21355e72b/6198193", [
		["Eye of the Tiger<br><small>(1982)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Survivortiger.jpg/220px-Survivortiger.jpg", [
			["It's the eye of the tiger,<br>It's the dream of the fight<br>Risin' up to the challenge of our rival<br>And the last known survivor stalks his prey in the night<br>And he's watchin' us all with the eye of the tiger", "Eye of the Tiger", "btPJPFnesV4"]
		]],
		["Rocky IV: Original Motion Picture Soundtrack", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Rocky4.jpg/220px-Rocky4.jpg", [
			["In the burning heart<br>Just about to burst<br>There's a quest for answers<br>An unquenchable thirst<br>In the darkest night<br>Rising like a spire<br>In the burning heart<br>The unmistakable fire", "Burning Heart", "Kc71KZG87X4"]
		]],
		["Vital Signs<br><small>(1984)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Survivorvital.jpg/220px-Survivorvital.jpg", [
			["I was living for a dream,<br>Loving for a moment<br>Taking on the world,<br>That was just my style<br>Now I look into your eyes<br>I can see forever,<br>The search is over<br>You were with me all the while", "The Search is Over", "xELTfJ-ZVBc"]
		]]
	]],
	// TALK TALK
	["Talk Talk<br><small>(1981-1991)</small>", "https://www.telegraph.co.uk/content/dam/obituaries/2019/02/26/TELEMMGLPICT000189715950_trans_NvBQzQNjv4BqH4D-jx1ezwmwmru7Y7fiE-etRoIgaPGE5S5iZK2mAis.jpeg", [
		["The Colour of Spring<br><small>1986</small>", "https://upload.wikimedia.org/wikipedia/en/d/de/Talk_Talk_-_The_Colour_of_Spring.jpg?20200729161431", [
			["Baby, life's what you make it<br>Celebrate it<br>Anticipate it<br>Yesterday's faded<br>Nothing can change it<br>Life's what you make it", "Life's What You Make It", "l3VqAsMXE7o"]
		]]
	]],
	// TEARS FOR FEARS
	["Tears for Fears<br><small>(1981-present)</small>", "https://i.guim.co.uk/img/media/c46b6e7746cb1e14b1d15b7fd1de4b6183d18166/0_84_4388_2632/master/4388.jpg?width=300&quality=85&auto=format&fit=max&s=5e3c6505165455d8140a2112f846ca12", [ 
		["Songs from the Big Chair<br><small>(1985)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Tears_for_Fears_Songs_from_the_Big_Chair.jpg/220px-Tears_for_Fears_Songs_from_the_Big_Chair.jpg", [
			["It's my own design<br>It's my own remorse<br>Help me to decide<br>Help me make the<br>Most of freedom and of pleasure<br>Nothing ever lasts forever<br>Everybody wants to rule the world", "Everybody Wants to Rule the World", "aGCdLKXNF3w"],
			["They gave you life<br>And in return you gave them hell<br>As cold as ice<br>I hope we live to tell the tale", "Shout", "Ye7FKc1JQe4"],
			["Shout<br>Shout<br>Let it all out<br>These are the things I can do without<br>Come on<br>I'm talking to you<br>Come on", "Shout", "Ye7FKc1JQe4"]
		]]
	]],
	// TURNER, TINA
	["Tina Turner<br><small>(born 26 November 1939)</small>", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Tina_Turner_50th_Anniversary_Tour.jpg/250px-Tina_Turner_50th_Anniversary_Tour.jpg", [
		["Private Dancer<br><small>(1984)</small>", "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Tina_Turner_Private_Dancer_US_CD_cover_art_1984_original.jpg/220px-Tina_Turner_Private_Dancer_US_CD_cover_art_1984_original.jpg", [
			["What's love got to do, got to do with it<br>What's love but a second hand emotion<br>What's love got to do, got to do with it<br>Who needs a heart when a heart can be broken", "What's Love Got to Do with It", "oGpFcHTxjZs"]
		]]
	]]
];

var introWords = ["Inspirational?", "Emotional?", "Hypnotizing?", "Romantic?", "Mystical?", "Fun?", "Mysterious?", "Powerful?", "Joyful?", "Magical?", "Whatever type of quote you want,", "The songs from the 70s, 80s, 90s has it,", "(not like today's crap)", "Welcome to the 70s, 80s, 90s Song Quotes Generator."];

var artistNamesDependingOnAmountSongs = [];

for(var x = 0; x < songQuotes.length; x++)
	for(var y = 0; y < songQuotes[x][2].length; y++)
		for(var z = 0; z < songQuotes[x][2][y][2].length; z++)
			artistNamesDependingOnAmountSongs.push(x);
		
// console.log(artistNamesDependingOnAmountSongs);
