//  Coded by Ayres Monteiro

/**
 * Complex Number Class.
 */
class ComplexNumber {
  /**
   * ComplexNumber's Constructor
   * @constructor
   * 
   * @param {Number} re Real coordinate of a Complex Number
   * @param {Number} im Imaginary coordinate of a Complex Number
  */
  constructor(re, im) {
    this.re = re;
    this.im = im;
    this.distance = Math.sqrt(re * re + im * im);
    this.cos = re / this.distance;
    this.sin = im / this.distance;
    this.angle = Math.atan2(im, re);
  }

  /**
   * ComplexNumber's Sum Function
   * 
   * @param {ComplexNumber} x First portion.
   * @param {ComplexNumber} y Second portion.
   * 
   * @returns {ComplexNumber} Sum result.
   */
  static sum(x, y){
    return new ComplexNumber(x.re + y.re, x.im + y.im);
  }

  /**
   * ComplexNumber's Instance Sum Function
   * 
   * Modifys the instance
   * @param {ComplexNumber} x Portion to be summed.
   * 
   * @returns {ComplexNumber} This instance after sum.
   */
  sum(x){
    this.re += x.re;
    this.im += x.im;
    this.distance = Math.sqrt(this.re * this.re + this.im * this.im);
    this.cos = this.re / this.distance;
    this.sin = this.im / this.distance;
    this.angle = Math.atan2(this.im, this.re);

    return this;
  }

  /**
   * ComplexNumber's Subtraction Function
   * 
   * @param {ComplexNumber} x First portion.
   * @param {ComplexNumber} y Second portion.
   * 
   * @returns {ComplexNumber} Subtraction result.
   */
  static sub(x, y){
    return new ComplexNumber(x.re - y.re, x.im - y.im);
  }

  /**
   * ComplexNumber's Instance Subtraction Function
   * 
   * Modifys the instance
   * @param {ComplexNumber} x Portion to be subtracted.
   * 
   * @returns {ComplexNumber} This instance after subtraction.
   */
  sub(x){
    this.re -= x.re;
    this.im -= x.im;
    this.distance = Math.sqrt(this.re * this.re + this.im * this.im);
    this.cos = this.re / this.distance;
    this.sin = this.im / this.distance;
    this.angle = Math.atan2(this.im, this.re);

    return this;
  }

  /**
   * ComplexNumber's Power Function
   * 
   * @param {ComplexNumber} x Basis Complex Number
   * @param {Number} exp Exponent
   * @param {Number} decimalDigits Number of digits after the decimal dot. Inclusive range [0-20]
   * 
   * @returns Power result
   */
  static pow(x, exp, decimalDigits = 6) {
    let distance = Math.pow(x.distance, exp);
    let angle = x.angle * exp;
    let cos = parseFloat((Math.cos(angle)).toFixed(decimalDigits));
    let sin = parseFloat((Math.sin(angle)).toFixed(decimalDigits));
    return new ComplexNumber(
      distance * cos,
      distance * sin
    );
  }

  /**
   * ComplexNumber's Instance Power Function
   * 
   * Modifys the instance
   * @param {Number} exp Exponent
   * @param {Number} decimalDigits Number of digits after the decimal dot. Inclusive range [0-20]
   * 
   * @returns {ComplexNumber} This instance after power application.
   */
  pow(exp, decimalDigits = 6) {
    let distance = Math.pow(this.distance, exp);
    let angle = this.angle * exp;
    let cos = parseFloat((Math.cos(angle)).toFixed(decimalDigits));
    let sin = parseFloat((Math.sin(angle)).toFixed(decimalDigits));
    this.re += distance * cos;
    this.im += distance * sin;
    this.distance = Math.sqrt(this.re * this.re + this.im * this.im);
    this.cos = this.re / this.distance;
    this.sin = this.im / this.distance;
    this.angle = Math.atan2(this.im, this.re);
    return this;
  }

  /**
   * ComplexNumber's Nth Root Function
   * 
   * @param {ComplexNumber} x Basis Complex Number
   * @param {Number} n Radiciation Index
   * @param {Number} decimalDigits Number of digits after the decimal dot. Inclusive range [0-20]
   * 
   * @returns {Array.<ComplexNumber>} Array of nth roots.
   */
  static roots(x, n, decimalDigits = 6) {
    let distance = Math.pow(x.distance, 1 / n);
    let roots = new Array();
    for (let i = 0; i < n; i++) {
      let angle = (x.angle + (2 * i * Math.PI)) / n;
      let re = parseFloat((distance * Math.cos(angle)).toFixed(decimalDigits));
      let im = parseFloat((distance * Math.sin(angle)).toFixed(decimalDigits));
      roots.push(new ComplexNumber(re, im));
    }

    return roots;
  }

  /**
   * ComplexNumber's Instance Nth Root Function
   * 
   * @param {Number} n Radiciation Index
   * @param {Number} decimalDigits Number of digits after the decimal dot. Inclusive range [0-20]
   * 
   * @returns {Array.<ComplexNumber>} Array of nth roots
   */
  roots(n, decimalDigits = 6) {
    return ComplexNumber.roots(this, n, decimalDigits);
  }

  /**
   * Radians to Degrees Conversion Function
   * 
   * @param {Number} x Radians to be converted
   * 
   * @returns Degrees
   */
  static radiansToDegrees(x) {
    return x * 180 / Math.PI;
  }
  
  /**
   * Degress to Radians Conversion Function
   * 
   * @param {Number} x Degress to be converted
   * 
   * @returns Radians
   */
  static degreesToRadians(x) {
    return x * Math.PI / 180;
  }

  /**
   * ComplexNumber's Parse to String Function
   * 
   * @returns {String} Ex: - 4 + 2i; - i; 0;
   */
  parseToString(decimalDigits = 2) {
    let re, reSign;
    re = parseFloat(this.re.toFixed(decimalDigits));
    reSign = re < 0 ? '- ' : '';

    let im, imSign;
    im = parseFloat(this.im.toFixed(decimalDigits));
    imSign = im > 0 ? '+ ' : im < 0 ? '- ' : '';

    re = Math.abs(re);
    im = Math.abs(im);
    if (im === 1 || im === -1) im = 'i';
    else im += 'i';

    if(re === 0 && im === 0)
      return '0';

    return `${reSign}${re} ${imSign}${im}`;
  }

  /**
   * Logs the ComplexNumber in the console.
   * 
   * @param {Number} decimalDigits Number of digits after the decimal dot. Inclusive range [0-20]
   */
  display(decimalDigits) {
    console.log(this.parseToString(decimalDigits));
  }
}

