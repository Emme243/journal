<template>
  <div class="entry-container pointer p-2">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      Id enim id elit velit occaecat culpa aliquip do ullamco dolore mollit velit eu. Irure deserunt
      consectetur enim ad incididunt quis et. Deserunt aliqua proident consequat eiusmod voluptate
      culpa eiusmod in nisi ad commodo. Minim cupidatat excepteur ut esse ullamco. Est magna
      pariatur elit ex tempor amet proident sunt nulla ullamco incididunt eu enim. Mollit cillum
      laborum adipisicing ut quis duis eiusmod quis tempor. Mollit pariatur aliqua aliquip Lorem
      esse proident excepteur est proident veniam eu tempor.
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
