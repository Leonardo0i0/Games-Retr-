const gravity = 0.4

const backgroundSpritePath = "../assets/background/placeholder.png"

class sprite {
    constructor({position, velocity, dimension, source}){
        this.position = position
        this.velocity = velocity
        this.width = dimension?.width
        this.height = dimension?.height

        if (source) {
            this.image = new Image()
            this.image.src = source
            
            this.width = this.image.width
            this.height = this.image.height
        }
        
    }

    draw(){
        if(this.image){
            ctx.drawImage(
                this.image,
                this.position.x,
                this.position.y,
                this.width,
                this.height
            )
        }else{
            ctx.fillStyle = "white" 
            ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
        }

        if(this.isAttacking){
            ctx.fillStyle="red"
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }
    update(){
        if(Math.ceil(this.position.y + this.height > canvas.height)){
            this.onGround = true
        }else{
            this.onGround = false
        }

        this.velocity.y += gravity

        if(this.position.y + this.height > canvas.height){
            this.position.y = canvas.height - this.height
            this.velocity.y = 0
        }else{
           if(!this.onGround) this.velocity.y += gravity
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        this.attackBox.position.x = this.position.x
        this.attackBox.position.y = this.position.y

        this.draw()
    }

    attack(){
        if(this.onAttackingCooldown)return
        this.isAttacking = true
        this.onAttackingCooldown = true

        setTimeout(() => {
            this.isAttacking = false
        }, 100);
        setTimeout(() => {
           this.onAttackingCooldown = false 
        }, this.attackCooldown);
    }

    jump(){
        if(!this.onGround)return
            this.velocity.y = -16
        
    }
}

class fighter extends sprite {
    constructor({
        position,
        velocity,
        dimension
    }){
        super({
            position,
            velocity,
            dimension
        })
        this.velocity = velocity
        this.width = dimension.width
        this.height = dimension.height

        this.attackBox = {
            position:{
                x: this.position.x,
                y: this.position.y,
            },
            width: 125,
            height: 50
        }

        this.isAttacking
        this.attackCooldown = 500
        this.onAttackingCooldown

        this.lastKeyPressed
        this.onGround
    }
}


const player = new fighter({
    position:{
        x:100,
        y:100
    },
    velocity:{
        x:0,
        y:10
    },
    dimension:{
        width: 50,
        height: 150
    }
})
/*const player2 = new fighter({
    position:{
        x:500,
        y:20
    },
    velocity:{
        x:0,
        y:10
    },
    dimension:{
        width: 50,
        height: 200
    }
})
*/

const background = new sprite ({
    position:{
        x:0,
        y:0
    },
    source:backgroundSpritePath
})