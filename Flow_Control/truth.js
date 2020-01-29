// What values do the following expressions evaluate to?

false || (true && false); // false || false  => false
true || (1 + 2);          // true || true    => true
(1 + 2) || true;          // true || true    => 3
true && (1 + 2);          // true && true    => 3
false && (1 + 2);         // false && true   => false
(1 + 2) && true;          // true && true    => true
(32 * 4) >= 129;          // 128 >= 129      => false
false !== !true;          // false !== false => false
true === 4;               // false
false === (847 === '847'); // false === (false) => true
false === (847 == '847');  // false === (true)  => false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;  // (false || (false) || (true) || false) => true