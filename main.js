db.collection('tasks')
    .get()
    .then(function (docs) {
        docs.forEach(function (doc) {
            console.log(doc.data().name)
        })
    })