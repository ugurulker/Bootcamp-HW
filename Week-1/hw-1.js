const folders = [
    {
      id: 5,
      name: "Klasör 1",
      files: [
        { id: 17, name: "profil.jpg" },
        { id: 18, name: "manzara.jpg" },
      ],
    },
    {
      id: 6,
      name: "Klasör 2",
      files: [
        { id: 21, name: "foto.png" },
        { id: 22, name: "dosya.xls" },
      ],
    },
    {
      id: 7,
      name: "Klasör 3",
    },
  ];
  
  // Taşıma işlemi
  function move(fileId, folderId) {
    try {
      folders.forEach((x) => {
        if (x.files == undefined) {
          x.files = [];
        }
      }); // Tek tek objectleri döndüm ve eğer files klasörü yoksa oluşturulsun dedim.
      const firstFile = folders.find((folder) => {
        return folder.files.find((folder) => folder.id === fileId); // ilk parametrenin ait olduğu klasör.
      });
      let firstFileInside = firstFile.files.find((item) => item.id === fileId); // ilk parametrenin kendisi.
      let firstFileIndex = firstFile.files.findIndex(
        (item) => item.id === fileId
      ); // ilk parametrenin index'i. Splice için lazım olacak.
      const folder = folders.find((folder) => folder.id === folderId); // ikinci parametredeki klasör.
      folder.files.push(firstFileInside); // istediğimiz dosyanın hedef klasöre kopyalanma işlemi.
      firstFile.files.splice(firstFileIndex, 1); // ilk aldığımız yerden silme işlemi.
    } catch (error) {
      console.log("Target file not found..");
    }
  }
  
  // Kopyalama işlemi
  function copy(fileId, folderId) {
    try {
      folders.forEach((x) => {
        if (x.files == undefined) {
          x.files = [];
        }
      }); // Tek tek objectleri döndüm ve eğer files klasörü yoksa oluşturulsun dedim.
      const firstFile = folders.find((folder) => {
        return folder.files.find((folder) => folder.id === fileId); // ilk parametrenin ait olduğu klasör.
      });
      let firstFileInside = firstFile.files.find((item) => item.id === fileId); // ilk parametrenin kendisi.
      const folder = folders.find((folder) => folder.id === folderId); // ikinci parametredeki klasör.
      folder.files.push(firstFileInside); // istediğimiz dosyanın hedef klasöre kopyalanma işlemi.
    } catch (error) {
      console.log("Target file not found..");
    }
  }
  
  // Klasör silme işlemi
  function remove(id) {
    try {
      const folder = folders.find((folder) => {
        return folder.files.find((folder) => folder.id === id); // Dışardan girilen id'ye sahip klasör bulundu ve onun parent dosyası getirildi.
      });
      if (folder) {
        let fileIndex = folder.files.findIndex((item) => item.id === id); // Parent dosya içerisindeki files klasörünün istenilen id'li index'i bulundu.
        folder.files.splice(fileIndex, 1);
      }
    } catch (error) {
      console.log("Target file not found..");
    }
  }
  
  // Parent dosya bulma işlemi
  function parentFolderOf(id) {
    try {
      const folder = folders.find((folder) => {
        return folder.files.find((folder) => folder.id === id);
      });
      console.log(folder.id);
    } catch (error) {
      console.log("Target file not found..");
    }
  }
  
  // Dosya silme işlemi
  function removeFolder(id) {
    const folder = folders.find((folder) => folder.id === id); // Dışarıdan girilen id'li object'e ulaştık.
    if (folder) {
      let folderIndex = folders.findIndex((item) => item.id === id); // id'si girilen objectin index'ini bulduk.
      folders.splice(folderIndex, 1);
      console.log(folders);
    }
  }
  