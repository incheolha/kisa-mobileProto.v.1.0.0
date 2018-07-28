import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import {ItemService} from '../../services/item-service';
import {CategoriesPage} from "../categories/categories";
import {CategoryPage} from "../category/category";
import {ItemPage} from "../item/item";
import {SearchPage} from "../search/search";
import {CartPage} from "../cart/cart";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // list slides for slider
  public slides = [
    {
      src: 'assets/img/sport1.jpg'
    },
    {
      src: 'assets/img/sport2.jpg'
    },
    {
      src: 'assets/img/sport3.jpg'
    }
  ];

  // list categories
  public categories: any;

  // list of items
  public items: any;

  constructor(public nav: NavController, public categoryService: CategoryService, public itemService: ItemService) {
    this.categories = categoryService.getAll();

    this.items = itemService.getAll();
  }

  // view categories
  viewCategories() {
    this.nav.push(CategoriesPage);
  }

  // view a category
  viewCategory(catId) {
    this.nav.push(CategoryPage, {id: catId});
  }

  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // go to search page
  goToSearch() {
    this.nav.push(SearchPage);
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
