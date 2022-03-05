Array.prototype.includesCi = function (item) {
  let str = item.toLowerCase(); // Dışarıdan girilen veri küçük harfe dönüştürüldü.
  let arr = []; // Orjinal dizimizde bozulmalar olmasın diye yeni bir boş array oluşturuldu.
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i].toLowerCase()); // Boş array içine dönüştürülen veri aktarıldı.
    if (arr[i] == str) {
      return true;
    }
  }
  return false;
};
