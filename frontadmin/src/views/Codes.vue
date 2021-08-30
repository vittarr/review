<template>
  <div class="codes container mt-6">
    <div class="content">
      <h2>
        <span class="icon-text mr-4">
          <span class="icon"> <i class="fas fa-qrcode"></i> </span>
        </span>
        QR Codes summary
      </h2>
      <p>
        On this page you can create QR codes which you can use ant trach
        responce rates
      </p>
    </div>
    <div class="columns">
      <div class="column is-8">
        <div class="box">
          <h4 class="title">Created QR codes</h4>
        </div>
      </div>
      <div class="column is-4">
        <div class="box">
          <h3 class="title">Create new QR</h3>
          <form action="" class="form">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
            <div class="field">
              <label class="label">Place</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Type</label>
              <div class="control">
                <div class="select">
                  <select>
                    <option>Select dropdown</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea has-fixed-size"
                  placeholder="Small textarea"
                ></textarea>
              </div>
            </div>
            <div class="buttons">
              <div class="button">Save</div>
              <div class="button is-primary">Discard</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Codes",
};
</script>

<style lang="scss" scoped>
.select, select {
  width: 100%;
}
</style>