	class createViewState{
 
		createView(){

			let viewContainer = document.createElement("div");
				viewContainer.setAttribute("class", "viewContainer")
				viewContainer.setAttribute("id", "viewContainer")
				if(!document.getElementById("viewContainer")){
					document.body.insertAdjacentElement("beforebegin", viewContainer) 
				}

			 	let containerForm = document.createElement("div")
			 		containerForm.setAttribute("id", "containerForm")
			 		containerForm.setAttribute("class", "containerForm")
			 		viewContainer.appendChild(containerForm);

			  let closeView = document.createElement("p");
			 	 closeView.textContent = "X";
			 	 closeView.setAttribute("class", "closeview")
			 	 closeView.setAttribute("id", "closeview")
			 	 containerForm.insertAdjacentElement("beforebegin", closeView)

			 	 closeview.addEventListener("click", (e)=>{
			 	 	let containerClose = document.getElementById("viewContainer");
			 	 	if(containerClose){
			 	 		containerClose.classList.add("goState")
			 	 		setTimeout(()=>{
			 	 			containerClose.remove()
			 	 		}, 500)

			 	 	}
			 	 }, false);

			 	let form = document.createElement("form");
			 		form.setAttribute("class", "formView");
			 		form.setAttribute("id", "formView");
			 		form.setAttribute("action", "main.php");
			 		form.setAttribute("method", "post");
			 		containerForm.appendChild(form);

			 	let area = document.createElement("textarea");
			 		area.setAttribute("class", "area");
			 		area.setAttribute("id", "area textpublish");
			 		area.setAttribute("name", "state");
			 		area.setAttribute("cols", "20");
			 		area.setAttribute("rows", "12");
			 		area.setAttribute("placeholder", "Mi estado");
			 		form.appendChild(area);
			 		/*let inutilsEmojis ['👅👄💋💘❤💓💔💕💖💗💙💚💛🧡💜🖤💝💞💟❣💌💤💢💣💥💦💨💫💬🗨🗯💭🤴👸👳‍♂👳‍♀👲🧕🧔👱‍♂👱‍♀🤵👰🤰🤱👼🙍‍♂🙍‍♀🙎‍♂🙎‍♀🙅‍♂🙆‍♂🙆‍♀💁‍♀🙋‍♂🙋‍♀🙇‍♂🙇‍♀🤦‍♂🤦‍♀🤷‍♂🤷‍♀💆‍♂💆‍♀💇‍♂💇‍♀🚶‍♂🚶‍♀🏃‍♂🏃‍♀💃🕺🛀🛌🕴🗣👤👥👫👬👭👩‍❤‍💋‍👨👨‍❤‍💋‍👨👩‍❤‍💋‍👩👩‍❤‍👨👨‍❤‍👨👩‍❤‍👩'];*/
			 	let emojisHumans = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎',
			 						'😍','😘','😗','😙','😚','☺','🙂','🤗','🤩','🤔','🤨','😐',
			 						'😑','😶','🙄','😏','😣','😥','😮','🤐','😯','😪','😫','😴','😌','😛',
			 						'😜','😝','🤤','😒','😓','😔','😕','🙃','🤑','😲','☹','🙁','😖','😞','😟',
			 						'😤','😢','😭','😦','😧','😨','😩','🤯','😬','😰','😱','😳','🤪','😵','😡','😠',
			 						'🤬','😷','🤒','🤕','🤢','🤮','🤧','😇','🤠','🤡', '🤥','🤫','🤭','🧐','🤓','😈',
			 						'👿','👹','👺','💀','☠','👻','👽','👾','🤖','💩','😺','😸','😹','😻','😼','😽','🙀',
			 						'😿','😾','🙈','🙉','🙊','👶','🧒','👦','👧','🧑','👨','👩','🧓','👴','👵','🤳','💪','👈','👉','☝','👆','🖕','👇','✌','🤞','🖖','🤘','🤙','🖐','✋','👌','👍','👎','✊','👊','🤛','🤜','🤚','👋','🤟','✍',
			 						'👏','👐','🙌','🤲','🙏','🤝','💅','👂','👃','👣','👀','👁','👁‍🗨','🧠'];

			 	let viewEmojis = ['😅', '💘', '🙉', '🍎', '🎲', '🚕', '🇩🇴'];

			 	let emojisContainer = document.createElement("div");
			 		emojisContainer.setAttribute("class", "emojiscontainer");
			 		emojisContainer.setAttribute("id", "emojiscontainer");
			 		form.appendChild(emojisContainer);

			 	let containerAllEmojis = document.createElement("div");
			 		containerAllEmojis.setAttribute("class", "containerAllEmojis");
			 		containerAllEmojis.setAttribute("id", "containerAllEmojis");
			 		// emojisContainer.appendChild(containerAllEmojis);
			 	
			 	for(let viewemoji=0; viewemoji<viewEmojis.length; viewemoji++){

			 		let emojisView = document.createElement("span");
			 			emojisView.setAttribute("class", "emojisView");
			 			emojisView.setAttribute("id", `emojisView`);
			 			emojisView.textContent = viewEmojis[viewemoji];
			 			emojisContainer.appendChild(emojisView);

			 	}

			 	let emojisAll = document.getElementById("emojiscontainer");
			 	let allEmojis = emojisAll.querySelectorAll('span');
			 	let counterClick = 0;

			 	for(let click=0; click<allEmojis.length; click++){
			 		allEmojis[click].addEventListener("click", (e)=>{
			 			 counterClick+=1
				 		if(counterClick<=1){
					 		let containerAllEmojis = document.createElement("div");
						 		containerAllEmojis.setAttribute("class", "containerAllEmojis");
						 		containerAllEmojis.setAttribute("id", "containerAllEmojis");
						 		emojisContainer.appendChild(containerAllEmojis);
						}
				 	})
			 	}
			 	
			  



			 



			 	let button = document.createElement("button");
			 		button.setAttribute("class", "button");
			 		button.setAttribute("id", "button buttonsend_publish");
			 		button.textContent= "Enviar estado"
			 		form.appendChild(button);


		}


	}
	
	let areaText = document.getElementById("textpublish");
		areaText.addEventListener("click", (e)=>{
			let instance = new createViewState();
				instance.createView();

		}, false);

 

