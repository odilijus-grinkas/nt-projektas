class Galerija{
  constructor(url1="Nera Nuotrauku", url2, url3){
    this.url1 = url1;
    this.url2 = url2;
    this.url3 = url3;
  };
  isvedimasKataloguiNT(){
    let img = document.createElement("img");
    img.src=this.url1;
    return img
  }
  isvedimasKataloguiAgento(){
    return -1;
  }
  galerijaNT(){
    return -1;
  }
  isvdeimasProfilis(){
    return -1;
  }
}
export { Galerija };