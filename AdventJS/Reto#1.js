const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
    return(
        gifts.map( i => (
            i.length == 1 ? `***\n*${i}*\n***` :
            i.length == 2 ? `****\n*${i}*\n****` :
            i.length == 3 ? `*****\n*${i}*\n*****` :
            i.length == 4 ? `******\n*${i}*\n******` :
            i.length == 5 ? `*******\n*${i}*\n*******` :
            `********\n*${i}*\n********`
        ))
    )
  }

const wrapped = wrapping(gifts)
console.log(wrapped)

//COMPLETE