import {Alert,AsyncStorage} from 'react-native';
import {observable, action} from 'mobx';

class Store {
    @observable wishList = [];
    @observable wishListCount = 0;

// WishList actions 

   // for remove From WishList
    @action removeFromWishList(index) {
        this.setWishListCount(-this.wishList[index].count);
        this.wishList.splice(index, 1);
        cacheWishList(this.wishList, this.wishListCount);
    }

   // for remove All From WishList
    @action removeAllFromWishList(index) {
        this.setWishListCount(this.wishList[index] === []);
        this.wishList = []
        this.wishListCount = 0;
        cacheWishList(this.wishList, this.wishListCount);
    }

    @action setWishList(data) {
        this.wishList = data;
    }
    @action setWishListCount(count) {
        this.wishListCount += count;
    }
    @action updateWishListItem(i, val) {
        this.wishList[i].count += val;
        this.setWishListCount(val);
    }
    @action resetWishListCount() {
        this.wishListCount = 0;
    }

  //  add To Wish List

  @action addToWishList(data) {
    let existData = this.wishList.find(w => w.id === data.id);
    if (existData) {
        Alert.alert ('already add before')
    } else {
        data.count = 1;
        this.wishList.push(data);
    }
    this.setWishListCount(1);
    cacheWishList(this.wishList, this.wishListCount);
   }
 }

// for wishlist and get wish list cache

export function cacheWishList(wishList, wishListCount) {
    AsyncStorage.setItem('@wishList', JSON.stringify(wishList));
    AsyncStorage.setItem('@wishListCount', wishListCount.toString());
}

export function getCachedWishList() {
    AsyncStorage.multiGet(['@wishList']).then(data => {
        if (data[0][1]) Store.setWishList(JSON.parse(data[0][1]));
        if (data[1][1]) Store.setWishListCount(parseInt(data[1][1]));
    });
}

export default new Store();