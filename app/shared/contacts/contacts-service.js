class Contacts {

  set contacts(list) {
    this.list = list;
  }

  get contacts() {
    return this.list;
  }

  add(contact) {
    this.list.push(contact)
  }

  remove(email) {
    let index = _.findIndex(this.list, e => e.name === email);
    this.list.splice(index, 1);
  }

}

export default Contacts
