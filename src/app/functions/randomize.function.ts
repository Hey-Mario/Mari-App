export function randomize(value: any[]){
    var i, j, tmp;
    for (i = value.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = value[i];
        value[i] = value[j];
        value[j] = tmp;
    }
    return value;
  }