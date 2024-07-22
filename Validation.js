class Validator {
  /**
   * Checks if the given string is a valid mobile number.
   * @param {string} mobile - The mobile number to validate.
   * @returns {boolean} - True if valid, otherwise false.
   */
  isMobile(mobile) {
    return /^0[0-9]{9}$/.test(mobile);
  }

  /**
   * Checks if the given string is a valid email address.
   * @param {string} email - The email address to validate.
   * @returns {boolean} - True if valid, otherwise false.
   */
  isEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  /**
   * Checks if the given string is a valid Hijri date.
   * @param {string} hd - The Hijri date to validate.
   * @param {string} separator - The separator used in the date format.
   * @returns {boolean} - True if valid, otherwise false.
   */
  isHijriDate(hd, separator) {
    const regex =
      separator === "/"
        ? /^14[0-9]{2}\/[0-9]{2}\/[0-9]{2}$/
        : /^14[0-9]{2}-[0-9]{2}-[0-9]{2}$/;
    return regex.test(hd);
  }

  /**
   * Checks if the given string is a valid username.
   * @param {string} username - The username to validate.
   * @returns {boolean} - True if valid, otherwise false.
   */
  isUsername(username) {
    return /^[a-zA-Z][a-zA-Z0-9]*$/.test(username);
  }

  /**
   * Checks if the given string is a valid password.
   * Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.
   * @param {string} password - The password to validate.
   * @returns {boolean} - True if valid, otherwise false.
   */
  isPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  }

  /**
   * Checks if the length of the given string is at least the specified minimum length.
   * @param {string} str - The string to check.
   * @param {number} min - The minimum length.
   * @returns {boolean} - True if the length is at least the minimum, otherwise false.
   */
  isMin(str, min) {
    return str.length >= min;
  }

  /**
   * Checks if the length of the given string is at most the specified maximum length.
   * @param {string} str - The string to check.
   * @param {number} max - The maximum length.
   * @returns {boolean} - True if the length is at most the maximum, otherwise false.
   */
  isMax(str, max) {
    return str.length <= max;
  }

  /**
   * Checks if the length of the given string is within the specified range.
   * @param {string} str - The string to check.
   * @param {number} min - The minimum length.
   * @param {number} max - The maximum length.
   * @returns {boolean} - True if the length is within the range, otherwise false.
   */
  isMinMax(str, min, max) {
    return str.length >= min && str.length <= max;
  }
}

export default Validator;
