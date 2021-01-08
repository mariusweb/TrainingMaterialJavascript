let parent = document.querySelector(".border");

let comment = document.querySelector(".btn-success");

let articleComment = document.createElement("h1");
articleComment.innerHTML = `
    <hr>
    <form method="get" class="d-flex flex-column">
        <div class="form-groug">
            <label for="name">Vardas:</label>
            <input type="text" class="form-control" name="name" id="name" />
        </div>
        <div class="form-group">
            <label for="comment">Komentaras:</label>
            <textarea
            class="form-control"
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            ></textarea>
            <input class="btn btn-primary" type="submit" value="Pateikti" />
        </div>
    </form>
    <hr>
`;
function showAlert() {
    alert("Dėkojame už jūsų nuomonę");
  }
comment.addEventListener("click", function(e){
    parent.append(articleComment);
    let alert = document.querySelector(".btn-primary");
    alert.addEventListener("click", function(){
        e.preventDefault();
        showAlert();
    });
});



