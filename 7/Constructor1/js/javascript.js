function getData() {
            var htmlPage;

            var titleValue = title.value;
            var descriptionValue = description.value;

            htmlPage = "<h1>" + titleValue + "</h1>";
            htmlPage += "<p>" + descriptionValue + "</p>";

            document.body.innerHTML = htmlPage;
}

