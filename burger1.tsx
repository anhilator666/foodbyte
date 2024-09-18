import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { ChevronLeft, Star, Plus } from 'lucide-react-native'; // Use appropriate icons package for React Native

const FoodItemDetail = () => {
  const addOns = [
    { name: 'Wings', image: 'https://via.placeholder.com/50' },
    { name: 'Drink', image: 'https://via.placeholder.com/50' },
    { name: 'Fries', image: 'https://via.placeholder.com/50' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <ChevronLeft color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      {/* Burger Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.foodImage} />
      </View>

      {/* Details Card */}
      <View style={styles.detailsCard}>
        {/* Rating and Price */}
        <View style={styles.ratingPriceRow}>
          <View style={styles.rating}>
            <Star color="#FFD700" size={14} />
            <Text style={styles.ratingText}>4.6</Text>
          </View>
          <Text style={styles.price}>₹ 49</Text>
        </View>

        {/* Name and Description */}
        <View style={styles.description}>
          <Text style={styles.foodName}>Ham Burger</Text>
          <Text style={styles.foodDescription}>
            Big, Juicy Burger filled with freshly cut meat and veggies and special sauces
          </Text>
        </View>

        {/* Add-ons */}
        <View style={styles.addOnsContainer}>
          {addOns.map((addon, index) => (
            <View key={index} style={styles.addOnItem}>
              <View style={styles.addOnImageContainer}>
                <Image source={{ uri: addon.image }} style={styles.addOnImage} />
                <TouchableOpacity style={styles.addOnButton}>
                  <Plus color="#fff" size={12} />
                </TouchableOpacity>
              </View>
              <Text style={styles.addOnName}>{addon.name}</Text>
            </View>
          ))}
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodItemDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to bottom, #E53935, #7B1FA2, #6A1B9A)', // For gradient effect
  },
  header: {
    padding: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  foodImage: {
    width: 300,
    height: 300,
    borderRadius: 16,
  },
  detailsCard: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  ratingPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: '#4A148C',
    padding: 6,
    borderRadius: 20,
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFD700',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  description: {
    marginTop: 12,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  foodDescription: {
    color: '#757575',
  },
  addOnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  addOnItem: {
    alignItems: 'center',
  },
  addOnImageContainer: {
    position: 'relative',
  },
  addOnImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  addOnButton: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addOnName: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#3F51B5',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 24,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
