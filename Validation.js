class Validator{

    constructor(text) {
        console.log(text);
    }

    isMobile(mobile) {
        return /0[0-9]{9}/.test(mobile);
    }

    isEmail(email) {
        return /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/.test(email);
    }

    isHijriDate(hd, sperator) {
        if (sperator === "/") {
            return /^14[0-9]{2}\/[0-9]{2}\/[0-9]{2}/.test(hd);
        } else if (sperator === "-") {
            return /^14[0-9]{2}-[0-9]{2}-[0-9]{2}/.test(hd);
        }
        return false;
    }

    isUsername(username) {
        return /[a-zA-Z]+[a-zA-Z0-9]/.test(username);
    }

    isPassword(password) {
        return /^(([a-z][A-Z][0-9])+@+)$/.test(password);
    }

    isMin(str, min) {
        return str.slice().length >= min;
    }

    isMax(str, max) {
        return str.slice().length <= max;
    }

    isMinMax(str, min, max) {
        return (str.slice().length >= min) && (str.slice().length <= max);
    }
}

export default Validator;
