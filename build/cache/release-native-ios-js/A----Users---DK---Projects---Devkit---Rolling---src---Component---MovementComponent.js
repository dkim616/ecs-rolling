a2c98c5ee8dcc76610eae46847d49eb0
jsio("import src.Component.Component as Component");
var MovementComponent=__class__,MovementComponent=MovementComponent(function(){return this.init&&this.init.apply(this,arguments)},Component,function(e){this.init=function(b){e(this,"init",Array.prototype.slice.apply(arguments,[1]));this.context=b;this.velocity=0.05};this.update=function(b){var a=GLOBAL.movementInput,d=this.velocity,c=d*Math.cos(Math.PI/4);a.state===a.states.right?this.context.style.x+=d*b:a.state===a.states.left?this.context.style.x-=d*b:a.state===a.states.up?this.context.style.y-=
d*b:a.state===a.states.down?this.context.style.y+=d*b:a.state===a.states.upRight?(this.context.style.x+=c*b,this.context.style.y-=c*b):a.state===a.states.downRight?(this.context.style.x+=c*b,this.context.style.y+=c*b):a.state===a.states.downLeft?(this.context.style.x-=c*b,this.context.style.y+=c*b):a.state===a.states.upLeft&&(this.context.style.x-=c*b,this.context.style.y-=c*b)};this.roll=function(){this.velocity=0.3;setTimeout(bind(this,function(){this.velocity=0.05}),1E3)}});
MovementComponent.prototype.key="MovementComponent";exports=MovementComponent;