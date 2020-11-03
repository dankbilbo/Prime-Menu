class Number {
    constructor(num, arr) {
        this.num = num;
        this.arr = arr;
    }

    enterNum() {
        let n;
        do {
            n = +prompt("Nhap N");
            if (n % 2 == 0 || n < 0) {
                alert("Nhap lai so le duong");
            }
        } while (n % 2 == 0 || n < 0);
        this.num = n;
        document.getElementById("N").innerHTML = "N la :" + this.num;
    }

    isPrime(num) {
        if (num < 2) {
            return false;
        } else if (num > 2) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    showNPrime() {
        let count = 0;
        let i = 0;
        let str = "";
        while (count < this.num) {
            if (this.isPrime(i) == true) {
                str += i + ",";
                count++;
            }
            i++;
        }
        document.getElementById("N-first-prime").innerHTML = "N so prime dau tien : " + str;
    }

    enterArrayElement() {
        for (let i = 0; i < this.num; i++) {
            this.arr[i] = +prompt("Nhap phan tu mang");
        }
    }

    showElements() {
        let str = "";
        for (let i = 0; i < this.arr.length; i++) {
            str += this.arr[i] + ",";
        }
        document.getElementById("Array-Elements").innerHTML = "Array Elements :" + str;
    }

    printPrimeInArray() {
        let str = "";
        for (let i = 0; i < this.arr.length; i++) {
            if (this.isPrime(this.arr[i]) == true) {
                str += this.arr[i] + ",";
            }
        }
        document.getElementById("Array-Prime-elements").innerHTML = "Prime trong array :" + str;
    }

    checkNInArray() {
        let count = 0;
        let str = "";
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] == this.num) {
                str += i + ",";
                count++;
            }
        }
        if (count == 0) {
            alert("N khong nam trong mang");
        }
        document.getElementById("n-position-in-array").innerHTML = "N o vi tri index : " + str;
    }

    deleteNInArray() {
        let str = "";
        let count = 0;
        for (let i = 0; i < this.arr.length; i++) {
            if(this.arr[i] == this.num) {
                count++;
                for(let j = i; j < this.arr.length; j++){
                    this.arr[j] = this.arr[j + 1];
                }
                i--;
            }
        }
        if(count == 0){
            alert("N khong nam trong mang");
            return;
        }
        for (let i = 0; i < this.arr.length; i++) {
            str += this.arr[i] + ",";
        }
        document.getElementById("new-array-after-delete").innerHTML = "Mang moi sau khi delete la : " + str;
    }

    sortArray() {
        let str = "";
        for(let i = 0; i < this.arr.length; i++){
            for(let j = 0; j < this.arr.length; j++){
                if(this.arr[i] < this.arr[j]){
                    let temp = this.arr[i];
                    this.arr[i] = this.arr[j];
                    this.arr[j] = temp;
                }
            }
        }
        for (let i = 0; i < this.arr.length; i++) {
            str += this.arr[i] + ",";
        }
        document.getElementById("sort-array").innerHTML = "Mang moi sau khi sap xep la : " + str;
    }

    enterXAtPosition() {
        let str = "";
        this.arr.push(document.getElementById("X").value);
        this.arr.sortArray();
        for (let i = 0; i < this.arr.length; i++) {
            str += this.arr[i] + ",";
        }
        document.getElementById("new-array-after-push-x").innerHTML = "Mang moi sau khi add x va sort la : " + str;
    }

    enterArray(arr) {
        this.arr = arr;
    }
}

let number = new Number();
let arr = new Array();
number.enterArray(arr);