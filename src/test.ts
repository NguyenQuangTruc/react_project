function isPalindrome(x: number): boolean {

    let xDaoNguoc : string = x.toString().split('').reverse().join('')
    return xDaoNguoc == x.toString()
};

