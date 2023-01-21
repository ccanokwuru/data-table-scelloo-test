<template>
  <header
    container-c
    relative
    font="500"
    flex
    flex-col
    max-w-screen-xl
    text="#6E6893 sm"
  >
    <hr h=".5px" bg="##C6C2DE" absolute bottom-0 left-0 w-full />
    <h1 font="700" uppercase text-sm leading-none>Table Heading</h1>
    <div flex flex-wrap justify-between items-center relative>
      <nav capitalize flex grow>
        <router-link to="all" link a>all</router-link>
        <router-link to="paid" link>paid</router-link>
        <router-link to="unpaid" link>unpaid</router-link>
        <router-link to="overdue" link>overdue</router-link>
      </nav>
      <div shrink>
        Total payable amount:
        <span text="lg">
          <span text="#6D5BD0 " font="700">$900.00</span> USD
        </span>
      </div>
    </div>
  </header>
</template>
<style></style>
