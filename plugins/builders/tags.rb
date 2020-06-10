class TagsBuilder < SiteBuilder
  def build
    liquid_tag "insert_svg" do |filename|
      svg_path = File.join site.source, "images", filename.gsub("../", "")
      svg_lines = File.readlines(svg_path).map(&:strip).select { |line|
        line unless line.start_with?("<!", "<?xml")
      }
      svg_lines.join
    end
  end
end
