# They work for who?


## Task 1

* In order to create an SQL database for the MPs.  We are going to store the constituencies, politicians and MPs in separate tables in our database.

* Your first task is to write the logic for the function `formatData` - (in **format-data.js**) which takes an array of MPs.

* Your function should iterate through the MPs in order to build up an array of MPs, parties and constituencies (they can then be seeded into the db);

* `parties` should be an array of objects in the following format:

```js
// [{
//   name : 'Labour'
// },{
//   name : 'Conservative'
// }]
```

* `constituencies` should be an array of objects in the following format : 

```js
// [{name : 'Houghton and Sunderland South'},...]
```

* `politicians` should be an array of objects in the following format: 

```js
// [
// {  
//     name: 'Rebecca Harris',
//     party: 2,
//     constituency: 58 },
// ]
```

**CRUCIAL**

* You should take note that the politicians array that you are building up has instead of party names and constituency names, just integers.  These integers should correspond to the foreign keys when the politicians are inserted into the database.

* Use the command `npm run seed` to execute the sql file and then run the seed file.

## Task 2


Add the following end-points:

- GET all politicians (including their constituency name and party name)
**Important** Your end-point for all politicians should be able to support queries as well: such as
`/api/politician?party=labour


- GET politician by id
`/api/politicians/:id`
