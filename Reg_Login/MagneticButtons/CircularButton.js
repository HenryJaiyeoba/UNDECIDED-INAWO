class CircularButton {

    constructor(text = "", draggable=true){
        this.draggable = draggable;
        this.text = text;
        this.button = null;
    }

    setButtonText(text){
        this.innerButtonContainer.textContent = text;
    }

    render(){

        const button = document.createElement("div");
        button.className = "button";

        const innerButtonContainer = document.createElement("span");
        innerButtonContainer.textContent = this.text;

        button.appendChild(innerButtonContainer);

        this.draggable && button.addEventListener("mousemove", (e) => {

            const position = button.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;

            button.children[0].style.animation = "unset";
            button.children[0].style.transform = "translate(" + x * 0.5 + "px, " + y * 0.6 + "px)";
        })

        this.draggable && button.addEventListener("mouseout", () => {
            button.children[0].style.transform = "translate(0px, 0px)";
            button.children[0].style.animation = "float 5s infinite";
        })

        this.button = button;
        this.innerButtonContainer = innerButtonContainer;

        return button;
        
    }

    animateOut(){
        this.button.style.transform = "scale(0)";
    }

    animateIn(){
        this.button.style.transform = "scale(1)";
    }

    placeBy(placing){

        switch(placing){
            case "top": this.place(`${range(10,90)} %`,"0 %");
            break;
            case "right": this.place("100 %",`${range(10,90)} %`);
            break;
            case "bottom": this.place(`${range(10,90)} %`,"100 %");
            break;
            case "left": this.place("0 %",`${range(10,90)} %`);
            break;
        }
    }

    place(x,y){

        const [ value_x, unit_x ] = x.split(" ")
        const [ value_y, unit_y ] = y.split(" ")

        const buttonHeight = this.innerButtonContainer.offsetHeight;
        const buttonMargin = this.innerButtonContainer.offsetTop;

        const offset = -(buttonHeight / 2 + buttonMargin);

        this.button.style.top = `calc(${offset}px + ${Number(value_y) + unit_y})`;
        this.button.style.left = `calc(${offset}px + ${Number(value_x) + unit_x})`;

    }

    replaceInfinitelyEvery(seconds, placing, getEmoji){

        this.setButtonText(getEmoji());
        this.placeBy(placing);
        const animateInRange = range(2,6);

        setInterval(() => {

            this.animateOut();

            setTimeout(() => {
                this.setButtonText(getEmoji());
                this.placeBy(placing);
                this.animateIn();
            }, animateInRange * 1000);

        }, (seconds + animateInRange) * 1000)
        
    }

}

class CircularButtonController {

    placings = ["top", "right", "bottom", "left"];

    constructor({ buttonCount, emojiQueue }){
        this.emojiQueue = emojiQueue;
        this.buttonCount = buttonCount;
    }
    
    render(){

        let buttons = [];

        for (let index = 0; index < this.buttonCount; index++) {
            buttons.push(new CircularButton())
        }

        console.log(buttons);

        buttons.forEach( (button, index) => {
            centerContainer.appendChild(button.render())
            button.replaceInfinitelyEvery(range(range(5,11),range(16,20)), this.pickPlacing(), () => this.getEmoji(this.emojiQueue))
        });

    }

    getEmoji(queue){
        let element = queue.shift();
        // console.log(element);
        this.emojiQueue.push(element);
        return element;
    }

    pickPlacing(){
        
        let element = this.placings.shift();
        console.log("placing: ", element);
        this.placings.push(element);
        return element;
    }


}