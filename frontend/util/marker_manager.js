export default class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = [];
    this.handleClick = handleClick;
    this._createMarkerFromListing = this._createMarkerFromListing.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(listings) {
    this.listings = listings;
    this._listingsToAdd().forEach(this._createMarkerFromListing);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _listingsToAdd() {
    const currentListings = this.markers.map( marker => marker.listingId );
    return this.listings.filter( listing => !currentListings.includes(listing.id) );
  }

  _markersToRemove() {
    const listingIds = this.listings.map( listing => listing.id );
    return this.markers.filter( marker => !listingIds.includes(marker.listingId) );
  }

  _createMarkerFromListing(listing) {
    let shape = {
      coords: [1,1,1,20,18,20,1],
      type: 'poly'
    }
    const pos = new google.maps.LatLng(listing.latitude, listing.longitude);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      listingId: listing.id,
    });
    marker.addListener('click', () => this.handleClick(listing));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
