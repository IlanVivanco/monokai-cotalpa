// Small palette helpers, to try the theme with C++.
#include <iostream>
#include <optional>
#include <regex>
#include <string>
#include <unordered_map>

#define THEME "Monokai Cotalpa"

namespace cotalpa {

constexpr double kMaxAlpha = 1.0;

enum class Variant { Main, Dark, Coffee };

struct Color {
	std::string name;
	std::string hex;
	double alpha = kMaxAlpha;

	[[nodiscard]] bool valid() const {
		static const std::regex pattern{R"(^#(?:[0-9a-f]{3}){1,2}$)", std::regex::icase};
		return std::regex_match(hex, pattern);
	}
};

template <typename T>
class Palette {
  public:
	explicit Palette(Variant variant) : variant_{variant} {}
	virtual ~Palette() = default;

	void add(const std::string& key, T color) { colors_.emplace(key, std::move(color)); }

	std::optional<T> find(const std::string& key) const {
		if (auto it = colors_.find(key); it != colors_.end()) {
			return it->second;
		}
		return std::nullopt;
	}

	[[nodiscard]] std::size_t size() const noexcept { return colors_.size(); }

  private:
	Variant variant_;
	std::unordered_map<std::string, T> colors_;
};

}  // namespace cotalpa

int main() {
	using namespace cotalpa;

	Palette<Color> palette{Variant::Coffee};
	palette.add("yellow", {"yellow", "#fcdc7d"});
	palette.add("red", {"red", "#fc988d", 0.8});

	auto describe = [](const Color& c) { return c.name + " is " + c.hex; };

	if (const auto color = palette.find("yellow"); color && color->valid()) {
		std::cout << describe(*color) << '\n';
	}

	std::cout << THEME << ": " << palette.size() << " colors" << std::endl;
	return 0;
}
