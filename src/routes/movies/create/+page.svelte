<a href="/movies" class="btn btn-outline-secondary btn-sm mb-4">← Back to movies</a>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Movie Title</label>
    <input name="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Year</label>
    <input name="year" type="number" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Length</label>
    <input name="length" type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>