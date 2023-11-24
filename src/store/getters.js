export default {
  filteredUsers(state) {
    return state.users.filter((user) =>
      user.name.toLowerCase().includes(state.filterKey.toLowerCase())
    )
  }
}
