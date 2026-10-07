import {
  Alert,
  Button,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function InstagramProfile() {
  const { width } = useWindowDimensions();

  // Keep the app narrow on computer but full width on phone
  const isDesktop = width >= 700;
  const appWidth = isDesktop ? 600 : width;

  return (
    <View style={styles.screen}>
      {/* Hide the real phone status bar.
          We create our own to match the screenshot. */}
      <StatusBar hidden />

      <View style={[styles.app, { width: appWidth }]}>
        {/* =====================================================
            FAKE PHONE STATUS BAR
            ===================================================== */}

        <View style={styles.statusBar}>
          {/* Time */}
          <Text style={styles.timeText}>10:06</Text>

          {/* Left notification icons */}
          <View style={styles.statusLeftIcons}>
            <Ionicons name="logo-whatsapp" size={18} color="#555" />

            <Ionicons name="people" size={18} color="#555" />

            <Ionicons name="logo-linkedin" size={18} color="#555" />

            <Text style={styles.dot}>•</Text>
          </View>

          {/* Right phone information */}
          <View style={styles.statusRightIcons}>
            <Ionicons name="volume-mute" size={17} color="#555" />

            <Ionicons name="wifi" size={19} color="#555" />

            <Text style={styles.fiveG}>5G+</Text>

            <Ionicons name="cellular" size={19} color="#555" />

            <View style={styles.battery}>
              <Text style={styles.batteryText}>89</Text>
            </View>
          </View>
        </View>

        {/* =====================================================
            INSTAGRAM HEADER
            ===================================================== */}

        <View style={styles.header}>
          <Ionicons name="add" size={39} color="#111" />

          <View style={styles.usernameContainer}>
            <Text style={styles.username}>abdi_mohamed55</Text>

            <Ionicons name="chevron-down" size={18} color="#111" />
          </View>

          <Ionicons name="logo-instagram" size={30} color="#111" />

          <Ionicons name="menu" size={33} color="#111" />
        </View>

        {/* =====================================================
            MAIN CONTENT
            ===================================================== */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* =================================================
              PROFILE
              ================================================= */}

          <View style={styles.profileSection}>
            {/* Profile picture */}
            <View style={styles.profilePictureArea}>
              <Image
                source={{
                  uri: "https://picsum.photos/200",
                }}
                style={styles.profileImage}
              />

              {/* Thought bubble */}
              <View style={styles.thoughtBubble}>
                <Text style={styles.thoughtText}>
                  Your{"\n"}
                  thoughts{"\n"}
                  go here...
                </Text>
              </View>

              {/* Plus */}
              <View style={styles.profilePlus}>
                <Ionicons name="add" size={24} color="#fff" />
              </View>
            </View>

            {/* Profile information */}
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>Abdibari mohamed</Text>

              <View style={styles.statsRow}>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>0</Text>

                  <Text style={styles.statLabel}>posts</Text>
                </View>

                <View style={styles.stat}>
                  <Text style={styles.statNumber}>222</Text>

                  <Text style={styles.statLabel}>followers</Text>
                </View>

                <View style={styles.stat}>
                  <Text style={styles.statNumber}>59</Text>

                  <Text style={styles.statLabel}>following</Text>
                </View>
              </View>
            </View>
          </View>

          {/* =================================================
              ADD BANNERS
              ================================================= */}

          <TouchableOpacity style={styles.addBanner}>
            <Ionicons name="add" size={24} color="#333" />

            <Text style={styles.addBannerText}>Add banners</Text>
          </TouchableOpacity>

          {/* =================================================
              PROFILE BUTTONS
              ================================================= */}

          <View style={styles.profileButtons}>
            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>Edit profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileButtonText}>Share profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.personButton}>
              <Ionicons name="person-add" size={23} color="#111" />
            </TouchableOpacity>
          </View>

          {/* =================================================
              DISCOVER PEOPLE
              ================================================= */}

          <View style={styles.discoverHeader}>
            <Text style={styles.discoverTitle}>Discover people</Text>

            <Text style={styles.seeAll}>See all</Text>
          </View>

          {/* =================================================
              SUGGESTED PEOPLE
              ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.suggestionsContainer}
          >
            {/* CARD 1 */}
            <View style={styles.suggestionCard}>
              <Ionicons
                name="close"
                size={27}
                color="#111"
                style={styles.closeButton}
              />

              <Image
                source={{
                  uri: "https://picsum.photos/201",
                }}
                style={styles.suggestionImage}
              />

              <Text style={styles.personName}>Alex Kemosh</Text>

              <Text style={styles.suggestedText}>Suggested for you</Text>

              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>

            {/* CARD 2 */}
            <View style={styles.suggestionCard}>
              <Ionicons
                name="close"
                size={27}
                color="#111"
                style={styles.closeButton}
              />

              <Image
                source={{
                  uri: "https://picsum.photos/202",
                }}
                style={styles.suggestionImage}
              />

              <Text style={styles.personName}>abdinoradenbulle</Text>

              <Text style={styles.suggestedText}>Suggested for you</Text>

              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>

            {/* CARD 3 */}
            <View style={styles.suggestionCard}>
              <Ionicons
                name="close"
                size={27}
                color="#111"
                style={styles.closeButton}
              />

              <Image
                source={{
                  uri: "https://picsum.photos/203",
                }}
                style={styles.suggestionImage}
              />

              <Text style={styles.personName}>Queen</Text>

              <Text style={styles.suggestedText}>Suggested for you</Text>

              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* =================================================
              AI CARD
              ================================================= */}

          <View style={styles.aiCard}>
            <Ionicons
              name="close"
              size={27}
              color="#555"
              style={styles.aiClose}
            />

            <Text style={styles.aiTitle}>
              Meet Muse, your personal AI{"\n"}
              agent
            </Text>

            <Text style={styles.aiDescription}>
              Hand off everyday tasks like finding{"\n"}
              deals, booking reservations, and{"\n"}
              managing your inbox.
            </Text>

            <Text style={styles.tryMuse}>Try Muse</Text>

            <Text style={styles.museLogo}>M</Text>
          </View>

          {/* =================================================
              REQUIRED ALERT BUTTON
              ================================================= */}

          <View style={styles.alertContainer}>
            <Button
              title="Alert"
              onPress={() => Alert.alert("Alert Button pressed")}
            />
          </View>
        </ScrollView>

        {/* =====================================================
            INSTAGRAM BOTTOM NAVIGATION
            ===================================================== */}

        <View style={styles.bottomNavigation}>
          {/* Home */}
          <Ionicons name="home-outline" size={27} color="#111" />

          {/* Reels */}
          <Ionicons name="play-circle-outline" size={29} color="#111" />

          {/* Direct messages */}
          <Ionicons name="paper-plane-outline" size={28} color="#111" />

          {/* Search */}
          <Ionicons name="search-outline" size={30} color="#111" />

          {/* Profile */}
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.bottomProfile}
          />
        </View>
      </View>
    </View>
  );
}

/* ============================================================
   STYLES
   ============================================================ */

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eeeeee",
    alignItems: "center",
  },

  app: {
    flex: 1,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },

  scrollContent: {
    paddingBottom: 90,
  },

  /* ==========================================================
     STATUS BAR
     ========================================================== */

  statusBar: {
    height: 32,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  timeText: {
    fontSize: 15,
    fontWeight: "600",
    width: 48,
  },

  statusLeftIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  dot: {
    fontSize: 16,
    color: "#555",
  },

  statusRightIcons: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  fiveG: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
  },

  battery: {
    width: 34,
    height: 18,
    borderRadius: 10,
    backgroundColor: "#777",
    justifyContent: "center",
    alignItems: "center",
  },

  batteryText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "700",
  },

  /* ==========================================================
     HEADER
     ========================================================== */

  header: {
    height: 65,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
  },

  usernameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  username: {
    fontSize: 21,
    fontWeight: "700",
  },

  /* ==========================================================
     PROFILE
     ========================================================== */

  profileSection: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingTop: 25,
  },

  profilePictureArea: {
    width: 120,
    height: 150,
    alignItems: "center",
    position: "relative",
  },

  profileImage: {
    width: 102,
    height: 102,
    borderRadius: 51,
  },

  thoughtBubble: {
    position: "absolute",
    top: -12,
    left: 2,
    width: 135,
    height: 118,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  thoughtText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 21,
  },

  profilePlus: {
    position: "absolute",
    right: 0,
    bottom: 27,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#111",
    borderWidth: 3,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  profileDetails: {
    flex: 1,
    minWidth: 0,
    marginLeft: 7,
    paddingTop: 18,
  },

  profileName: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 17,
  },

  statsRow: {
    width: "100%",
    flexDirection: "row",
  },

  stat: {
    flex: 1,
    alignItems: "center",
  },

  statNumber: {
    fontSize: 23,
    fontWeight: "600",
  },

  statLabel: {
    fontSize: 14,
    marginTop: 3,
  },

  /* ==========================================================
     ADD BANNERS
     ========================================================== */

  addBanner: {
    alignSelf: "flex-start",
    marginLeft: 25,
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 25,
    paddingHorizontal: 17,
    paddingVertical: 9,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  addBannerText: {
    fontSize: 17,
    fontWeight: "600",
  },

  /* ==========================================================
     PROFILE BUTTONS
     ========================================================== */

  profileButtons: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 18,
    marginTop: 28,
    gap: 8,
  },

  profileButton: {
    flex: 1,
    height: 50,
    backgroundColor: "#f0f1f5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  profileButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },

  personButton: {
    width: 55,
    height: 50,
    backgroundColor: "#f0f1f5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  /* ==========================================================
     DISCOVER
     ========================================================== */

  discoverHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    marginTop: 38,
    marginBottom: 15,
  },

  discoverTitle: {
    fontSize: 22,
    fontWeight: "600",
  },

  seeAll: {
    fontSize: 19,
    color: "#142a9c",
    fontWeight: "600",
  },

  /* ==========================================================
     SUGGESTIONS
     ========================================================== */

  suggestionsContainer: {
    paddingLeft: 18,
    paddingRight: 18,
  },

  suggestionCard: {
    width: 180,
    height: 340,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
    paddingTop: 30,
    position: "relative",
    backgroundColor: "#fff",
  },

  closeButton: {
    position: "absolute",
    right: 12,
    top: 5,
  },

  suggestionImage: {
    width: 115,
    height: 115,
    borderRadius: 58,
    marginBottom: 22,
  },

  personName: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },

  suggestedText: {
    fontSize: 14,
    color: "#555",
    marginTop: 7,
  },

  followButton: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 18,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#4b5df5",
    justifyContent: "center",
    alignItems: "center",
  },

  followText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  /* ==========================================================
     AI CARD
     ========================================================== */

  aiCard: {
    marginHorizontal: 18,
    marginTop: 30,
    minHeight: 250,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 18,
    padding: 22,
    position: "relative",
  },

  aiClose: {
    position: "absolute",
    right: 14,
    top: 5,
  },

  aiTitle: {
    fontSize: 21,
    fontWeight: "700",
    marginTop: 25,
  },

  aiDescription: {
    fontSize: 16,
    color: "#30466b",
    lineHeight: 24,
    marginTop: 14,
  },

  tryMuse: {
    fontSize: 18,
    fontWeight: "700",
    color: "#132b92",
    marginTop: 22,
  },

  museLogo: {
    position: "absolute",
    right: 30,
    bottom: 30,
    fontSize: 50,
    fontWeight: "700",
    color: "#1769e0",
  },

  /* ==========================================================
     ALERT
     ========================================================== */

  alertContainer: {
    marginHorizontal: 25,
    marginTop: 30,
    marginBottom: 20,
  },

  /* ==========================================================
     BOTTOM INSTAGRAM NAVIGATION
     ========================================================== */

  bottomNavigation: {
    height: 62,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  bottomProfile: {
    width: 31,
    height: 31,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#111",
  },
});
