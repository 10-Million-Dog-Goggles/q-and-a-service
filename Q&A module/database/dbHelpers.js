const QApair = require('./');

var dbHelpers = {
  get: (id) => {
    return QApair.find({ productID:id })
        .then((data) => {
          return sortByHelpful(data);
        })
  },
  post: (newQuestion) => {
    return QApair.create(newQuestion);
  },
  postAns: (answer, num) => {
    return QApair.findOneAndUpdate(num,  { $push: { answers: answer  } })
  },
  sort: (id, category) => {
    if (category === 'newestQ') {
      return QApair.aggregate([{
        $match: {productID:id}},
        {$unwind:"$QApairs"},
        {$sort:{"QApairs.qDate":-1}},
        {$group:{_id:"$_id", productID:{"$first":"$productID"}, QApairs:{$push:"$QApairs"}}}
      ])
    }
    if (category === 'newestAns') {
      return QApair.find({ productID:id })
        .then((data) => {
          return sortByNewestAns(data);
        });
    }
    if (category === 'mostAns') {
      return QApair.aggregate([{
        $match: {productID:id}},
        {$unwind:"$QApairs"},
        {$sort:{"QApairs.ansCount":-1}},
        {$group:{_id:"$_id", productID:{"$first":"$productID"}, QApairs:{$push:"$QApairs"}}}
      ]);
    }
    if (category === 'ansNeeded') {
      return QApair.aggregate([{
        $match: {productID:id}},
        {$unwind:"$QApairs"},
        {$sort:{"QApairs.ansCount":1}},
        {$group:{_id:"$_id", productID:{"$first":"$productID"}, QApairs:{$push:"$QApairs"}}}
      ]);
    }
    if (category === 'mostHelpful') {
      return QApair.find({ productID:id })
        .then((data) => {
          return sortByHelpful(data);
        })
    }
  }
}

var sortByHelpful = (data) => {
  for (var i = 0; i < data[0].QApairs.length; i++) {
    data[0].QApairs[i].answers.sort(function(a,b) {
      return b.yes - a.yes;
    });
  }
  data[0].QApairs.sort(function(a,b) {
    return b.answers[0].yes - a.answers[0].yes;
  });
  return data;
}

var sortByNewestAns = (data) => {
  for (var i = 0; i < data[0].QApairs.length; i++) {
    data[0].QApairs[i].answers.sort(function(a,b) {
      return new Date(b.aDate) - new Date(a.aDate);
    });
  }
  data[0].QApairs.sort(function(a,b) {
    return new Date(b.answers[0].aDate) - new Date(a.answers[0].aDate);
  });
  return data;
}

module.exports = dbHelpers;