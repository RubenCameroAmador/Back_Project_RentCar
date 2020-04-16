const app=require('./app');
require('./database');
async function main(){
  app.set('puerto', process.env.PORT || 4000);
  await app.listen(app.get('puerto'));
  console.log('RentCard listening on port'+ app.get('puerto'));
}


main();