const Mdict =  require('js-mdict').default
const mdict = new Mdict('./dict-PT.mdx')

// const express = require('express')
// const app = express()

// app.get('/lookup', async (req, res, next) => {
//   try {
//     console.log(mdict.lookup("interactive"));
//     console.log(mdict.bsearch("interactive"));
//     console.log(mdict.fuzzy_search("interactive", 5));
//     console.log(mdict.prefix("interactive"));
//       res.json({
//           plants: []
//       })
//   } catch (err) {
//       next(err);
//   }
// })

// mdict.prefix("interactive")

let word = 'matame'

const res1 = mdict.lookup(word)

// const res2 = mdict.fuzzy_search(word, 20, 5)

// mdict.suggest(word).then(res => {
//   console.log(res)
// })

console.log(res1)
// console.log(res2)