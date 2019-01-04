const Cake = {
    flovarChocolate: 'The Flovar is Chocolate',
    flovarVanilla: 'The Flovar is Vanilla'
}

function CakeFlavor(flavor,arg1= Cake) {
    if (flavor == 'vanilla') {
        console.log(arg1.flovarVanilla)
    }
    else if (flavor == 'chocolate' ) {
        console.log(arg1.flovarChocolate)
    }
    else {
        console.log('Choose something between chocolate and vanilla!')
    }
}

console.log(CakeFlavor('vanilla'))
console.log(CakeFlavor('chocolate'))
console.log(CakeFlavor('yellow'))


// and SocratFunction:
const Mortal = {
    men: true,
    lifeStatus: 'mortal'

}

function MortalAndRest(arg2,arg=Mortal) {
   if(arg.men) {
       if (arg2 == 'Socrat') {
           console.log(arg.lifeStatus + ' ' + arg.men )
       } else if (arg2 == 'men') {
           return arg.men + ' ' + arg.lifeStatus
       }
       else if(arg2 =='') {
           console.log(arg.men)
       }
         else {
           console.log('Error!')
       }
   }
}

console.log(MortalAndRest())
console.log(MortalAndRest('Socrat'))
console.log(MortalAndRest('men'))
 
