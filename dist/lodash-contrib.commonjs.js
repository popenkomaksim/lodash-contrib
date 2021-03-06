var _ = module.exports = require("lodash").runInContext();

require("../common-js/_.array.builders.js")(_);
require("../common-js/_.array.selectors.js")(_);
require("../common-js/_.collections.walk.js")(_);
require("../common-js/_.function.arity.js")(_);
require("../common-js/_.function.combinators.js")(_);
require("../common-js/_.function.iterators.js")(_);
require("../common-js/_.function.predicates.js")(_);
require("../common-js/_.object.builders.js")(_);
require("../common-js/_.object.selectors.js")(_);
require("../common-js/_.util.existential.js")(_);
require("../common-js/_.util.operators.js")(_);
require("../common-js/_.util.strings.js")(_);
require("../common-js/_.util.trampolines.js")(_);

 //Adding explicit method names for static analysis
module.exports.VERSION             = _.VERSION;
module.exports.accessor            = _.accessor;
module.exports.add                 = _.add;
module.exports.after               = _.after;
module.exports.all                 = _.all;
module.exports.always              = _.always;
module.exports.any                 = _.any;
module.exports.arity               = _.arity;
module.exports.ary                 = _.ary;
module.exports.assign              = _.assign;
module.exports.at                  = _.at;
module.exports.attempt             = _.attempt;
module.exports.backflow            = _.backflow;
module.exports.before              = _.before;
module.exports.best                = _.best;
module.exports.binPick             = _.binPick;
module.exports.binary              = _.binary;
module.exports.bind                = _.bind;
module.exports.bindAll             = _.bindAll;
module.exports.bindKey             = _.bindKey;
module.exports.bitwiseAnd          = _.bitwiseAnd;
module.exports.bitwiseLeft         = _.bitwiseLeft;
module.exports.bitwiseNot          = _.bitwiseNot;
module.exports.bitwiseOr           = _.bitwiseOr;
module.exports.bitwiseRight        = _.bitwiseRight;
module.exports.bitwiseXor          = _.bitwiseXor;
module.exports.bitwiseZ            = _.bitwiseZ;
module.exports.bound               = _.bound;
module.exports.callback            = _.callback;
module.exports.camelCase           = _.camelCase;
module.exports.capitalize          = _.capitalize;
module.exports.cat                 = _.cat;
module.exports.ceil                = _.ceil;
module.exports.chain               = _.chain;
module.exports.chunk               = _.chunk;
module.exports.chunkAll            = _.chunkAll;
module.exports.chunkContrib        = _.chunkContrib;
module.exports.clone               = _.clone;
module.exports.cloneDeep           = _.cloneDeep;
module.exports.collate             = _.collate;
module.exports.collect             = _.collect;
module.exports.compact             = _.compact;
module.exports.comparator          = _.comparator;
module.exports.complement          = _.complement;
module.exports.compose             = _.compose;
module.exports.conjoin             = _.conjoin;
module.exports.cons                = _.cons;
module.exports.constant            = _.constant;
module.exports.contains            = _.contains;
module.exports.countBy             = _.countBy;
module.exports.create              = _.create;
module.exports.curry               = _.curry;
module.exports.curry2              = _.curry2;
module.exports.curry3              = _.curry3;
module.exports.curryRight          = _.curryRight;
module.exports.curryRight2         = _.curryRight2;
module.exports.curryRight3         = _.curryRight3;
module.exports.cycle               = _.cycle;
module.exports.debounce            = _.debounce;
module.exports.deburr              = _.deburr;
module.exports.dec                 = _.dec;
module.exports.defaults            = _.defaults;
module.exports.defaultsDeep        = _.defaultsDeep;
module.exports.defer               = _.defer;
module.exports.delay               = _.delay;
module.exports.detect              = _.detect;
module.exports.dictionary          = _.dictionary;
module.exports.difference          = _.difference;
module.exports.disjoin             = _.disjoin;
module.exports.div                 = _.div;
module.exports.done                = _.done;
module.exports.drop                = _.drop;
module.exports.dropRight           = _.dropRight;
module.exports.dropRightWhile      = _.dropRightWhile;
module.exports.dropWhile           = _.dropWhile;
module.exports.each                = _.each;
module.exports.eachRight           = _.eachRight;
module.exports.endsWith            = _.endsWith;
module.exports.enforce             = _.enforce;
module.exports.eq                  = _.eq;
module.exports.escape              = _.escape;
module.exports.escapeRegExp        = _.escapeRegExp;
module.exports.every               = _.every;
module.exports.exists              = _.exists;
module.exports.existsAll           = _.existsAll;
module.exports.explode             = _.explode;
module.exports.extend              = _.extend;
module.exports.falsey              = _.falsey;
module.exports.falseyAll           = _.falseyAll;
module.exports.fill                = _.fill;
module.exports.filter              = _.filter;
module.exports.find                = _.find;
module.exports.findIndex           = _.findIndex;
module.exports.findKey             = _.findKey;
module.exports.findLast            = _.findLast;
module.exports.findLastIndex       = _.findLastIndex;
module.exports.findLastKey         = _.findLastKey;
module.exports.findWhere           = _.findWhere;
module.exports.first               = _.first;
module.exports.firstExisting       = _.firstExisting;
module.exports.fix                 = _.fix;
module.exports.flatten             = _.flatten;
module.exports.flattenDeep         = _.flattenDeep;
module.exports.flip                = _.flip;
module.exports.flip2               = _.flip2;
module.exports.floor               = _.floor;
module.exports.flow                = _.flow;
module.exports.flowRight           = _.flowRight;
module.exports.fnull               = _.fnull;
module.exports.foldl               = _.foldl;
module.exports.foldr               = _.foldr;
module.exports.forEach             = _.forEach;
module.exports.forEachRight        = _.forEachRight;
module.exports.forIn               = _.forIn;
module.exports.forInRight          = _.forInRight;
module.exports.forOwn              = _.forOwn;
module.exports.forOwnRight         = _.forOwnRight;
module.exports.frequencies         = _.frequencies;
module.exports.fromQuery           = _.fromQuery;
module.exports.functionalize       = _.functionalize;
module.exports.functions           = _.functions;
module.exports.get                 = _.get;
module.exports.getPath             = _.getPath;
module.exports.groupBy             = _.groupBy;
module.exports.gt                  = _.gt;
module.exports.gte                 = _.gte;
module.exports.has                 = _.has;
module.exports.hasPath             = _.hasPath;
module.exports.head                = _.head;
module.exports.humanize            = _.humanize;
module.exports.identity            = _.identity;
module.exports.implode             = _.implode;
module.exports.inRange             = _.inRange;
module.exports.inc                 = _.inc;
module.exports.include             = _.include;
module.exports.includes            = _.includes;
module.exports.indexBy             = _.indexBy;
module.exports.indexOf             = _.indexOf;
module.exports.initial             = _.initial;
module.exports.inject              = _.inject;
module.exports.interpose           = _.interpose;
module.exports.intersection        = _.intersection;
module.exports.invert              = _.invert;
module.exports.invoke              = _.invoke;
module.exports.isArguments         = _.isArguments;
module.exports.isArray             = _.isArray;
module.exports.isAssociative       = _.isAssociative;
module.exports.isBoolean           = _.isBoolean;
module.exports.isDate              = _.isDate;
module.exports.isDecreasing        = _.isDecreasing;
module.exports.isElement           = _.isElement;
module.exports.isEmpty             = _.isEmpty;
module.exports.isEqual             = _.isEqual;
module.exports.isError             = _.isError;
module.exports.isEven              = _.isEven;
module.exports.isFinite            = _.isFinite;
module.exports.isFloat             = _.isFloat;
module.exports.isFunction          = _.isFunction;
module.exports.isIncreasing        = _.isIncreasing;
module.exports.isIndexed           = _.isIndexed;
module.exports.isInstanceOf        = _.isInstanceOf;
module.exports.isInteger           = _.isInteger;
module.exports.isJSON              = _.isJSON;
module.exports.isMatch             = _.isMatch;
module.exports.isNaN               = _.isNaN;
module.exports.isNative            = _.isNative;
module.exports.isNegative          = _.isNegative;
module.exports.isNull              = _.isNull;
module.exports.isNumber            = _.isNumber;
module.exports.isNumeric           = _.isNumeric;
module.exports.isObject            = _.isObject;
module.exports.isOdd               = _.isOdd;
module.exports.isPlainObject       = _.isPlainObject;
module.exports.isPositive          = _.isPositive;
module.exports.isRegExp            = _.isRegExp;
module.exports.isSequential        = _.isSequential;
module.exports.isString            = _.isString;
module.exports.isTypedArray        = _.isTypedArray;
module.exports.isUndefined         = _.isUndefined;
module.exports.isValidDate         = _.isValidDate;
module.exports.isZero              = _.isZero;
module.exports.iterateUntil        = _.iterateUntil;
module.exports.iteratee            = _.iteratee;
module.exports.iterators           = _.iterators;
module.exports.juxt                = _.juxt;
module.exports.kebabCase           = _.kebabCase;
module.exports.keep                = _.keep;
module.exports.keepIndexed         = _.keepIndexed;
module.exports.keys                = _.keys;
module.exports.keysIn              = _.keysIn;
module.exports.kv                  = _.kv;
module.exports.last                = _.last;
module.exports.lastIndexOf         = _.lastIndexOf;
module.exports.lt                  = _.lt;
module.exports.lte                 = _.lte;
module.exports.map                 = _.map;
module.exports.mapArgs             = _.mapArgs;
module.exports.mapArgsWith         = _.mapArgsWith;
module.exports.mapKeys             = _.mapKeys;
module.exports.mapValues           = _.mapValues;
module.exports.mapcat              = _.mapcat;
module.exports.matches             = _.matches;
module.exports.matchesProperty     = _.matchesProperty;
module.exports.max                 = _.max;
module.exports.memoize             = _.memoize;
module.exports.merge               = _.merge;
module.exports.method              = _.method;
module.exports.methodOf            = _.methodOf;
module.exports.methodize           = _.methodize;
module.exports.methods             = _.methods;
module.exports.min                 = _.min;
module.exports.mixin               = _.mixin;
module.exports.mod                 = _.mod;
module.exports.modArgs             = _.modArgs;
module.exports.mul                 = _.mul;
module.exports.neg                 = _.neg;
module.exports.negate              = _.negate;
module.exports.neq                 = _.neq;
module.exports.noConflict          = _.noConflict;
module.exports.noop                = _.noop;
module.exports.not                 = _.not;
module.exports.now                 = _.now;
module.exports.nth                 = _.nth;
module.exports.nths                = _.nths;
module.exports.object              = _.object;
module.exports.omit                = _.omit;
module.exports.omitWhen            = _.omitWhen;
module.exports.once                = _.once;
module.exports.pad                 = _.pad;
module.exports.padLeft             = _.padLeft;
module.exports.padRight            = _.padRight;
module.exports.pairs               = _.pairs;
module.exports.parseInt            = _.parseInt;
module.exports.partial             = _.partial;
module.exports.partialRight        = _.partialRight;
module.exports.partition           = _.partition;
module.exports.partitionBy         = _.partitionBy;
module.exports.pick                = _.pick;
module.exports.pickWhen            = _.pickWhen;
module.exports.pipeline            = _.pipeline;
module.exports.pluck               = _.pluck;
module.exports.property            = _.property;
module.exports.propertyOf          = _.propertyOf;
module.exports.pull                = _.pull;
module.exports.pullAt              = _.pullAt;
module.exports.quaternary          = _.quaternary;
module.exports.rCurry              = _.rCurry;
module.exports.random              = _.random;
module.exports.range               = _.range;
module.exports.rcurry2             = _.rcurry2;
module.exports.rcurry3             = _.rcurry3;
module.exports.rearg               = _.rearg;
module.exports.reduce              = _.reduce;
module.exports.reduceRight         = _.reduceRight;
module.exports.reductions          = _.reductions;
module.exports.reject              = _.reject;
module.exports.remove              = _.remove;
module.exports.renameKeys          = _.renameKeys;
module.exports.repeat              = _.repeat;
module.exports.repeatContrib       = _.repeatContrib;
module.exports.rest                = _.rest;
module.exports.restParam           = _.restParam;
module.exports.result              = _.result;
module.exports.reverseOrder        = _.reverseOrder;
module.exports.round               = _.round;
module.exports.runInContext        = _.runInContext;
module.exports.sample              = _.sample;
module.exports.second              = _.second;
module.exports.select              = _.select;
module.exports.selectKeys          = _.selectKeys;
module.exports.seq                 = _.seq;
module.exports.set                 = _.set;
module.exports.setPath             = _.setPath;
module.exports.shuffle             = _.shuffle;
module.exports.size                = _.size;
module.exports.slice               = _.slice;
module.exports.slugify             = _.slugify;
module.exports.snakeCase           = _.snakeCase;
module.exports.snapshot            = _.snapshot;
module.exports.sneq                = _.sneq;
module.exports.some                = _.some;
module.exports.sortBy              = _.sortBy;
module.exports.sortByAll           = _.sortByAll;
module.exports.sortByOrder         = _.sortByOrder;
module.exports.sortedIndex         = _.sortedIndex;
module.exports.sortedLastIndex     = _.sortedLastIndex;
module.exports.splat               = _.splat;
module.exports.splitAt             = _.splitAt;
module.exports.splitWith           = _.splitWith;
module.exports.spread              = _.spread;
module.exports.startCase           = _.startCase;
module.exports.startsWith          = _.startsWith;
module.exports.strContains         = _.strContains;
module.exports.stripTags           = _.stripTags;
module.exports.sub                 = _.sub;
module.exports.sum                 = _.sum;
module.exports.support             = _.support;
module.exports.tail                = _.tail;
module.exports.take                = _.take;
module.exports.takeRight           = _.takeRight;
module.exports.takeRightWhile      = _.takeRightWhile;
module.exports.takeSkipping        = _.takeSkipping;
module.exports.takeWhile           = _.takeWhile;
module.exports.tap                 = _.tap;
module.exports.template            = _.template;
module.exports.templateSettings    = _.templateSettings;
module.exports.ternary             = _.ternary;
module.exports.third               = _.third;
module.exports.throttle            = _.throttle;
module.exports.thru                = _.thru;
module.exports.times               = _.times;
module.exports.titleCase           = _.titleCase;
module.exports.toArray             = _.toArray;
module.exports.toDash              = _.toDash;
module.exports.toPlainObject       = _.toPlainObject;
module.exports.toQuery             = _.toQuery;
module.exports.trampoline          = _.trampoline;
module.exports.transform           = _.transform;
module.exports.trim                = _.trim;
module.exports.trimLeft            = _.trimLeft;
module.exports.trimRight           = _.trimRight;
module.exports.trunc               = _.trunc;
module.exports.truthy              = _.truthy;
module.exports.truthyAll           = _.truthyAll;
module.exports.unary               = _.unary;
module.exports.unescape            = _.unescape;
module.exports.union               = _.union;
module.exports.uniq                = _.uniq;
module.exports.unique              = _.unique;
module.exports.uniqueId            = _.uniqueId;
module.exports.unsplat             = _.unsplat;
module.exports.unsplatl            = _.unsplatl;
module.exports.unsplatr            = _.unsplatr;
module.exports.unzip               = _.unzip;
module.exports.unzipWith           = _.unzipWith;
module.exports.updatePath          = _.updatePath;
module.exports.values              = _.values;
module.exports.valuesAt            = _.valuesAt;
module.exports.valuesIn            = _.valuesIn;
module.exports.walk                = _.walk;
module.exports.weave               = _.weave;
module.exports.where               = _.where;
module.exports.without             = _.without;
module.exports.words               = _.words;
module.exports.wrap                = _.wrap;
module.exports.xor                 = _.xor;
module.exports.zip                 = _.zip;
module.exports.zipObject           = _.zipObject;
module.exports.zipWith             = _.zipWith;
