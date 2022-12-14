import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import { httpService } from './http-service.js'

const KEY = 'toys_db'
const TOY_URL = 'toy/'

// _createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query(filterBy) {
  return httpService.get(TOY_URL, filterBy)
  // return storageService.query(KEY)
}

function getById(toyId) {
  return httpService.get(TOY_URL + toyId)
  // return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return httpService.delete(TOY_URL + toyId)
  // return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy._id) return httpService.put(TOY_URL + toy._id, toy)
  return httpService.post(TOY_URL, toy)
  // if (toy._id) return storageService.put(KEY, toy)
  // return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    name: '',
    inStock: true,
    price: 0,
    createdAt: Date.now(),
    labels: ['Doll', 'Battery Powerd'],
    reviews: [],
  }
}

function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      {
        _id: utilService.makeId(),
        name: 'harry',
        inStock: true,
        price: 980,
        createdAt: 1631031801011,
        labels: ['Doll', 'Battery Powerd'],
        reviews: ['he has the coolest wand!!!'],
      },
      {
        _id: utilService.makeId(),
        name: 'ron',
        inStock: true,
        price: 500,
        createdAt: 1631031801011,
        labels: ['Doll', 'Battery Powerd', 'Baby'],
        reviews: ['i like his style!'],
      },
      {
        _id: utilService.makeId(),
        name: 'hermione',
        inStock: false,
        price: 305,
        createdAt: 1631031801011,
        labels: ['Doll', 'Battery Powerd', 'Baby'],
        reviews: [],
      },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
