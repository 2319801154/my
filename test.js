async function async1(){
  console.log('async1 start')    //2
  await async2()
  console.log('async1 end')     //4
}

async function async2(){
  console.log('async2')        //3
}

async1()
console.log('2222');




